package com.example.backend.global.minio;

import com.example.backend.global.image.Image;
import com.example.backend.global.image.ImageUtil;

import io.minio.MinioClient;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
@RequiredArgsConstructor
public class MinioUploader {

    private final MinioClient minioClient;

    @Value("${minio.put-object-part-size}")
    private Long putSize; // 최대 파일 사이즈

    @Value("${minio.bucket}")
    private String bucket;


}
