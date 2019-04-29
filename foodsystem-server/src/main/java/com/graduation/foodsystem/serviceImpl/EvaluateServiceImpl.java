package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.EvaluateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EvaluateServiceImpl implements EvaluateService {

    @Autowired
    EvaluateService evaluateService;
}