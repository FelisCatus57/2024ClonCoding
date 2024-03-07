package com.example.backend.domain.user.service;

import com.example.backend.domain.user.Enum.Gender;
import com.example.backend.domain.user.Enum.Role;
import com.example.backend.domain.user.dto.UserSignUpDTO;
import com.example.backend.domain.user.entity.User;
import com.example.backend.domain.user.repository.UserRepository;
import com.example.backend.global.image.Image;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final static String filePath = "D:/savefile";

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public void signUp(UserSignUpDTO userSignUpDTO) throws Exception{

        if (userRepository.findByUsername(userSignUpDTO.getUsername()).isPresent()) {
            throw new Exception("이미 존재하는 아이디 입니다.");
        }

        if (userRepository.findByNickname(userSignUpDTO.getNickname()).isPresent()) {
            throw new Exception("이미 존재하는 닉네임 입니다.");
        }

        User user = User.builder()
                .username(userSignUpDTO.getUsername())
                .password(userSignUpDTO.getPassword())
                .nickname(userSignUpDTO.getNickname())
                .name(userSignUpDTO.getName())
                .email(userSignUpDTO.getEmail())
                .role(Role.USER)
                .gender(Gender.PRIVATE)
                .image(Image.builder()
                        .saveFilePath(filePath)
                        .originFileName("insta_basic_people_image")
                        .saveFileName("basic")
                        .build())
                .build();

        user.setEncPassword(bCryptPasswordEncoder);

        userRepository.save(user);
    }
}
