package com.example.backend.jwtoauth2.repository;

import com.example.backend.jwtoauth2.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);


}

