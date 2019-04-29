package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderService orderService;
}