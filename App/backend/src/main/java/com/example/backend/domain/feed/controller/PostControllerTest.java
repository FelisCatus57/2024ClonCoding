package com.example.backend.domain.feed.controller;


import com.example.backend.domain.feed.dto.PostUploadRequest;
import com.example.backend.domain.feed.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class PostControllerTest {

    private final PostService postService;

    @PostMapping("/postup1")
    public String uploadTest(PostUploadRequest postUploadResponse) {

        postService.postUpload(postUploadResponse);

        return "";
    }


}
