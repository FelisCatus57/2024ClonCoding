package com.example.backend.domain.feed.service;

import com.example.backend.domain.feed.repository.CommentRepository;
import com.example.backend.domain.feed.repository.PostRepository;
import com.example.backend.domain.user.repository.UserRepository;
import com.example.backend.global.util.AuthUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final AuthUtil authUtil;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    private final UserRepository userRepository;

    @Transactional
    public
}
