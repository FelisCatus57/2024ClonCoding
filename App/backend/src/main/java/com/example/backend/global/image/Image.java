package com.example.backend.global.image;

import jakarta.persistence.Embeddable;
import lombok.*;

@Getter
@Builder
@Embeddable
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Image {

    private String saveFilePath;

    private String originFileName;

    private String saveFileName;

    public void setSaveFilePath(String filePath) {
        this.saveFilePath = filePath;
    }

}
