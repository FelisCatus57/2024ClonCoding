package com.example.backend.domain.user.controller;

import com.example.backend.domain.user.dto.UserSignUpDTO;
import com.example.backend.domain.user.service.UserService;
import com.example.backend.global.jwt.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;

    @PostMapping("/sign-up")
    @ResponseBody
    public String signUp(@RequestBody UserSignUpDTO userSignUpDTO) throws Exception {
        userService.signUp(userSignUpDTO);
        String accessToken = jwtService.createAccessToken(userSignUpDTO.getUsername(), userSignUpDTO.getNickname());
//        System.out.println(">>>>>>>>> " + accessToken +  " <<<<<<<<<");
        return "가입 성공!";
    }

    @GetMapping("/jwt-test")
    public String jwtTest() {
        return "JWTTest 요청 성공";
    }
}
