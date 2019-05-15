package com.graduation.foodsystem.service;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Market;
import org.springframework.stereotype.Service;

@Service
public interface MarketService {

    BackJson getMarketByUserId(int userId);

    BackJson getMarketByMarketId(int marketId);

    BackJson registerMarket(Market market);

    BackJson getAllMarket();

    BackJson changeMarketInfo(Market market);

    BackJson deleteMarketInfo(int marketId);

    BackJson getAllMarketLikeAddress(String userAddress);
}