package com.example.backend.domain.user.controller;

import com.example.backend.domain.user.dto.UserSignUpDTO;
import com.example.backend.domain.user.entity.User;
import com.example.backend.domain.user.repository.UserRepository;
import com.example.backend.domain.user.service.UserService;
import com.example.backend.global.exception.dto.ResponseDTO;
import com.example.backend.global.exception.response.ResponseCodeMessage;
import com.example.backend.global.jwt.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @PostMapping("/sign-up")
    @ResponseBody
    public ResponseEntity<ResponseDTO> signUp(@RequestBody UserSignUpDTO userSignUpDTO) throws Exception {
        userService.signUp(userSignUpDTO);
        User user = userRepository.findByUsername(userSignUpDTO.getUsername()).get();
//        return "가입 성공!";
        return ResponseEntity.ok(ResponseDTO.of(ResponseCodeMessage.REGISTER_SUCCESS, user));
    }



    @GetMapping("/jwt-test")
    public String jwtTest() {
        return "JWTTest 요청 성공";
    }
}
