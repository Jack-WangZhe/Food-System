package com.graduation.foodsystem.controller;

import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.MarketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/market")
@RestController
public class MarketController {

    @Autowired
    MarketService marketService;

}