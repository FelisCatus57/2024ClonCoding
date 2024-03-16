package com.example.backend.domain.feed.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostUploadResponse {

    private Long postId;

    private List<MultipartFile> postImages = new ArrayList<>();
}
