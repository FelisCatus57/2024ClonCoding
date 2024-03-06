package com.example.backend.global.exception.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResponseCodeMessage {

    // User
    REGISTER_SUCCESS(200, "회원가입에 성공하였습니다."),
    LOGIN_SUCCESS(200, "로그인에 성공하였습니다."),
    REISSUE_SUCCESS(200, "재발급에 성공하였습니다.");

    private final int status;
    private final String message;
}
