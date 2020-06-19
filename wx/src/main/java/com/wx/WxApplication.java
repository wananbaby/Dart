package com.wx;

import com.spring4all.swagger.EnableSwagger2Doc;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * @author 021411
 */
@EnableSwagger2Doc
@SpringBootApplication
public class WxApplication {

    public static void main(String[] args) {
        System.out.println("start");
        SpringApplication.run(WxApplication.class, args);
    }

}
