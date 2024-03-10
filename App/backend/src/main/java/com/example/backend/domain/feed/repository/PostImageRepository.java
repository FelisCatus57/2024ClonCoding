package com.example.backend.domain.feed.repository;

import com.example.backend.domain.feed.entity.PostImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostImageRepository extends JpaRepository<PostImage, Long> {
}
