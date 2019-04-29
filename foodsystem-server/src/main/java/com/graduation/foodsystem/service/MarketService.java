package com.graduation.foodsystem.service;

import com.graduation.foodsystem.model.BackJson;
import org.springframework.stereotype.Service;

@Service
public interface MarketService {

    BackJson getMarketByUserId(int userId);

    BackJson getMarketByMarketId(int marketId);
}