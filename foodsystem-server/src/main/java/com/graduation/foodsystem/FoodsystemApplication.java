package com.graduation.foodsystem;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
@MapperScan("com.graduation.foodsystem.mapper")
public class FoodsystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodsystemApplication.class, args);
	}

}
