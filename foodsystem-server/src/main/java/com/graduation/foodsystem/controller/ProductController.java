package com.graduation.foodsystem.controller;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/product")
@RestController
public class ProductController {

    @Autowired
    ProductService productService;

}