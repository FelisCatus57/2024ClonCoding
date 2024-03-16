package com.example.backend.domain.feed.repository;

import com.example.backend.domain.feed.entity.Comment;
import com.example.backend.domain.feed.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllByPost(Post post);

    List<Comment> findAllByParent(Comment comment);

    List<Comment> findTop2ByPostIdOrderByIdDesc(Long postId);
}
