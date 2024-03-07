package com.example.backend.global.image;

import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.Random;
import java.util.UUID;

public class ImageUtil {

    public static Image convert(MultipartFile multipartFile) {

        final String originFileName = multipartFile.getOriginalFilename();
        final String name = FilenameUtils.getBaseName(originFileName);

        return Image.builder()
                .originFileName(name)
                .saveFileName(UUID.randomUUID().toString())
                .build();
    }
}
