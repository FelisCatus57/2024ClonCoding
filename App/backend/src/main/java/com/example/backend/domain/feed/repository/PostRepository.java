package com.example.backend.domain.feed.repository;

import com.example.backend.domain.feed.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
