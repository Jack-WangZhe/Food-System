package com.graduation.foodsystem.controller;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.MarketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/market")
@RestController
public class MarketController {

    @Autowired
    MarketService marketService;

    /**
     * 通过用户Id获得其下的店铺信息
     * @param userId
     * @return
     */
    @GetMapping(value = "/market/user")
    public BackJson getMarketByUserId(@RequestParam("userId")int userId) {
        return marketService.getMarketByUserId(userId);
    }

    /**
     * 通过marketId获得店铺信息
     * @param marketId
     * @return
     */
    @GetMapping(value = "/market/market")
    public BackJson getMarketByMarketId(@RequestParam("marketId")int marketId) {
        return marketService.getMarketByMarketId(marketId);
    }


}