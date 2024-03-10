package com.example.backend.global.minio;


import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.nio.channels.MembershipKey;

@Service
@RequiredArgsConstructor
public class MinioTest {

    private final MinioClient minioClient;

    @Value("${minio.put-object-part-size}")
    private Long putObjectPartSize;


    public void save(MultipartFile file) throws Exception{
        minioClient.putObject(
                PutObjectArgs.builder()
                .bucket("sample")
                        .object("test1.png")
                        .stream(file.getInputStream(), file.getSize(), putObjectPartSize)
                .build()
        );
    }

}
