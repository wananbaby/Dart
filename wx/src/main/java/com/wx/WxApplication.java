package com.wx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WxApplication {

    public static void main(String[] args) {
        System.out.println("start");
        SpringApplication.run(WxApplication.class, args);
    }

}
