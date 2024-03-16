package com.example.backend.domain.feed.repository;

import com.example.backend.domain.feed.entity.Post;
import com.example.backend.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

    Post findPostByUser(User user);

    Post findPostById(int postId);
}
