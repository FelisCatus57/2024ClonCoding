package com.example.backend.tool.minio;


import com.example.backend.global.image.Image;
import com.example.backend.global.util.ImageUtil;
import io.minio.GetPresignedObjectUrlArgs;
import io.minio.MinioClient;

import io.minio.PutObjectArgs;
import io.minio.RemoveObjectArgs;
import lombok.RequiredArgsConstructor;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@Component
@RequiredArgsConstructor
@Slf4j
public class MinioUploader {

    private final MinioClient minioClient;

    @Value("${minio.put-object-part-size}")
    private Long putSize; // 최대 파일 사이즈

    @Value("${minio.bucket}")
    private String bucket;

    // 
    public Image to(MultipartFile multipartFile, String path) throws FileNotFoundException {
        final Image image = ImageUtil.to(multipartFile); // MultipartFile 을 Image 객체로 변환
        final String filename = convertToFilename(path, image); // 경로와 이미지 객체의 정보를 가지고 파일 이름 생성
        final String url = upload(multipartFile, filename); // 경로 반환후 설정
        image.setUrl(url);

        return image;
    }

    // TODO Exception 교체
    private String upload(MultipartFile multipartFile, String filename) throws FileNotFoundException {
        final File localFile = convertMultiToLocal(multipartFile);
        String url = putMinio(localFile, filename);
        deleteLocalFile(localFile);
        return url;
    }

    @SneakyThrows
    //TODO Exception
    private String putMinio(File file, String filename){

        InputStream inputStream = new FileInputStream(file);

        minioClient.putObject(
                PutObjectArgs.builder()
                        .bucket(bucket)
                        .object(filename)
                        .stream(inputStream, file.length(), putSize)
                        .build()
        );

        String fileUrl = minioClient.getPresignedObjectUrl(
                GetPresignedObjectUrlArgs.builder()
                        .bucket(bucket)
                        .object(filename)
                        .build()
        );

        return fileUrl;
    }

    public void deleteImage(Image image, String path) {

        if (image.getImageUUID().equals("base-UUID")) { // 기본 설정된 사진일 경우
            return; // 종료 시킨다.
        }

        final String filename = convertToFilename(path, image);

        try {
            minioClient.removeObject(
                    RemoveObjectArgs.builder()
                            .bucket(bucket)
                            .object(filename)
                            .build()
            );
        } catch (Exception e) {

        }
    }

    private String convertToFilename(String path, Image image) {
        return convertToFilename(path, image.getImageUUID(), image.getImageName(), image.getImageType().toString());
    }

    private String convertToFilename(String path, String UUID, String name, String type) {
        return path + "/" + UUID + "_" + name + "." + type;
    }

    private void deleteLocalFile(File localFile) {
        if (localFile.delete()) {
            return;
        }

        log.error("Local File Delete Failed : " + localFile.getName());
    }

    // TODO EXCEPTION 교체
    private File convertMultiToLocal(MultipartFile file) throws FileNotFoundException {
        try {
            final String filePath = System.getProperty("user.dir") + "\\upload\\" + file.getOriginalFilename();
            final File convertFile = new File(filePath);
            if (convertFile.createNewFile()) {
                log.info("create local file: " + filePath);
                try (FileOutputStream fos = new FileOutputStream(convertFile)) {
                    fos.write(file.getBytes());
                }
                log.info("complete write to local file");
                return convertFile;
            }
            throw new FileNotFoundException(); // Custom Exception
        } catch (IOException e) {
            throw new FileNotFoundException(); // Custom Exception
        }
    }

}
