package com.example.backend.tool.minio;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import static java.lang.System.*;
import static org.junit.jupiter.api.Assertions.*;

class MinioUploaderTest {



    @Test
    public void test() {
        String s = System.getProperty("user.dir") + File.separator + "upload" + File.separator;
        System.out.println(s);
    }


}