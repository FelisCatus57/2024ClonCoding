package com.example.backend.domain.user.dto;

import lombok.Data;

@Data
public class UserSignUpDTO {

    private String username;
    private String password;
    private String email;
    private String name;
    private String nickname;
}
