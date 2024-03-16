package com.example.backend.global.util;

import com.example.backend.domain.feed.entity.Post;
import com.example.backend.domain.feed.repository.PostRepository;
import com.example.backend.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PostUtil {

    private final AuthUtil authUtil;
    private final PostRepository postRepository;

    public Post getLoginUserPost() {

        User loginUser = authUtil.getLoginUser();

        Post postByUser = postRepository.findPostByUser(loginUser);

        return postByUser;
    }
}
