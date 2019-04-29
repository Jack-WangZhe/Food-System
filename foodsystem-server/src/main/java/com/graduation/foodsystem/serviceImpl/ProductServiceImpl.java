package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductService productService;
}