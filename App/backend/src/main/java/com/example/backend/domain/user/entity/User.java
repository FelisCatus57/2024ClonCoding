package com.example.backend.domain.user.entity;

import com.example.backend.domain.user.Enum.Gender;
import com.example.backend.domain.user.Enum.Role;
import com.example.backend.domain.user.Enum.SocialType;
import com.example.backend.global.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Getter
@Entity
@Builder
@AllArgsConstructor
@Table(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(nullable = false, unique = true)
    private String username; // 아이디 (UNIQUE)

    @Column(nullable = false)
    private String password; // 비밀번호

    @Column(nullable = false)
    private String name; // 이름

    @Column(nullable = false, unique = true)
    private String nickname; // 닉네임 (UNIQUE)

    @Column(nullable = false)
    private String email; // 이메일

    @Enumerated(EnumType.STRING)
    private Role role; // 권한 (자동 ROLE_USER)

    @Enumerated(EnumType.STRING)
    private Gender gender; // 성별 (처음에는 자동으로 PRIVATE)
    
    private String phoneNo; // 전화번호

    @Column(length = 500)
    private String introduce; // 자기소개
    
    private String website; // 웹사이트

    private String profileImgUrl; // 프로필 이미지

    @Enumerated(EnumType.STRING)
    private SocialType socialType; // 소셜로그인 시 플랫폼

    private String socialId; // 소셜로그인 시 저장될 ID

    private String refreshToken; // JWT 리프레시 토큰 저장

    // 유저 권한 설정 메소드
//    public void authorizeUser() {
//        this.role = Role.USER;
//    }

    // 비밀번호 암호화
    public void setEncPassword(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.password = bCryptPasswordEncoder.encode(this.password);
    }

    public void updateName(String name) {
        this.name = name;
    }

    public void updateEmail(String email) {
        this.email = email;
    }

    public void updatePhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public void updateIntroduce(String introduce) {
        this.introduce = introduce;
    }

    public void updateWebsite(String website) {
        this.website = website;
    }

    // 리프레시 토큰 업데이트 메소드
    public void updateRefreshToken(String updateRefreshToken) {
        this.refreshToken = updateRefreshToken;
    }

}
