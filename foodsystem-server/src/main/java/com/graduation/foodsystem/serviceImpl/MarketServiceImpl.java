package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.mapper.MarketMapper;
import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Market;
import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.MarketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarketServiceImpl implements MarketService {

    @Autowired
    MarketMapper marketMapper;

    /**
     * 获得指定用户的店铺
     * @param userId
     * @return
     */
    @Override
    public BackJson getMarketByUserId(int userId) {
        return null;
    }

    /**
     * 通过marketId获得market信息
     * @param marketId
     * @return
     */
    @Override
    public BackJson getMarketByMarketId(int marketId) {
        return null;
    }

    /**
     * 注册店铺信息
     * @param market
     * @return
     */
    @Override
    public BackJson registerMarket(Market market) {
        market.setIsdelete(0);
        return null;
    }

    /**
     * 获得所有market列表
     * @return
     */
    @Override
    public BackJson getAllMarket() {
        return null;
    }

    /**
     * 修改market信息
     * @param marketId
     * @return
     */
    @Override
    public BackJson changeMarketInfo(int marketId) {
        return null;
    }

    /**
     * 通过marketId将指定market的isdelete变成1
     * @param marketId
     * @return
     */
    @Override
    public BackJson deleteMarketInfo(int marketId) {
        return null;
    }
}