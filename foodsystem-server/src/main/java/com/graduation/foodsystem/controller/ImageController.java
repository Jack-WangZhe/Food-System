package com.graduation.foodsystem.controller;

import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/image")
@RestController
public class ImageController {

    @Autowired
    ImageService imageService;

}