package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.MarketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarketServiceImpl implements MarketService {

    @Autowired
    MarketService marketService;
}