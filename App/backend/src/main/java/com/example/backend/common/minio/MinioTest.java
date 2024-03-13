package com.example.backend.common.minio;

import com.example.backend.global.image.Image;
import com.example.backend.global.result.ResultCodeMessage;
import com.example.backend.global.result.ResultResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;

@RestController
@RequiredArgsConstructor
public class MinioTest {

    private final MinioUploader minioUploader;

    @PostMapping("/upload")
    public ResponseEntity<ResultResponseDTO> upload(@RequestParam("file") MultipartFile file) throws FileNotFoundException {

        Image image = minioUploader.to(file, "post");

        return ResponseEntity.ok(new ResultResponseDTO(ResultCodeMessage.POST_SUCCESS, image));
    }

    @PostMapping("/delete")
    public ResponseEntity<ResultResponseDTO> delete(@RequestParam("file") MultipartFile file) throws FileNotFoundException {

        Image image = minioUploader.toImage(file);

        minioUploader.deleteImage(image, "post");

        return ResponseEntity.ok(new ResultResponseDTO(ResultCodeMessage.POST_DELETE_SUCCESS, "성공!"));
    }


}
