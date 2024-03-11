package com.example.backend.global.error;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCodeMessage {

    UNKNOWN(500, "알 수 없는 오류가 발생하였습니다."),
    INTERNAL_SERVER_ERROR(500,  "내부 서버 오류입니다."),

    // User
    USER_NOT_FOUND(400,  "존재 하지 않는 유저입니다."),
    USERNAME_EXIST(400,  "이미 존재하는 아이디 입니다."),
    AUTHENTICATION_FAIL(401,  "로그인이 필요한 화면입니다."),
    AUTHORITY_INVALID(403,  "권한이 없습니다."),
    ACCOUNT_MISMATCH(401,  "회원 정보가 일치하지 않습니다."),

    // TODO Status 변환하기
    INVALID_TOKEN( 401, "유효하지 않은 토큰입니다."),
    EXPIRED_TOKEN( 401, "만료된 토큰입니다.");

    private final int status;
    private final String message;
}
