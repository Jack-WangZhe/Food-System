package com.graduation.foodsystem.controller;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Market;
import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.MarketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/market")
@RestController
public class MarketController {

    @Autowired
    MarketService marketService;

    /**
     * 注册商铺，填写商铺信息
     * @param market
     * @return
     */
    @PostMapping
    public BackJson registerMarket(@RequestBody Market market) {
        return marketService.registerMarket(market);
    }

    /**
     * 通过用户Id获得其下的店铺信息,需要isdelete=0
     * @param userId
     * @return
     */
    @GetMapping(value = "/user")
    public BackJson getMarketByUserId(@RequestParam("userId")int userId) {
        return marketService.getMarketByUserId(userId);
    }

    /**
     * 通过marketId获得店铺信息,需要isdelete=0
     * @param marketId
     * @return
     */
    @GetMapping(value = "/{marketId}")
    public BackJson getMarketByMarketId(@PathVariable("marketId")int marketId) {
        return marketService.getMarketByMarketId(marketId);
    }

    /**
     * 获得所有店铺信息
     * @return
     */
    @GetMapping(value = "/all")
    public BackJson getAllMarket() {
        return marketService.getAllMarket();
    }

    /**
     * 修改店铺信息
     * @param market
     * @return
     */
    @PutMapping
    public BackJson changeMarketInfo(@RequestBody Market market) {
        return marketService.changeMarketInfo(market);
    }

    /**
     * 删除指定店铺
     * @param marketId
     * @return
     */
    @DeleteMapping(value = "/{marketId}")
    public BackJson deleteMarketInfo(@PathVariable("marketId")int marketId) {
        return marketService.deleteMarketInfo(marketId);
    }
}