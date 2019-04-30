package com.graduation.foodsystem.service;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Evaluate;
import org.springframework.stereotype.Service;

@Service
public interface EvaluateService {

    BackJson submitEvalute(Evaluate evaluate);

    BackJson deleteEvaluate(int evaluateId);

    BackJson getEvaluateByUserId(int userId);
}