package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.mapper.ImageMapper;
import com.graduation.foodsystem.mapper.MarketMapper;
import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Image;
import com.graduation.foodsystem.model.Market;
import com.graduation.foodsystem.service.ImageService;
import com.graduation.foodsystem.service.MarketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarketServiceImpl implements MarketService {

    @Autowired
    MarketMapper marketMapper;
    @Autowired
    ImageMapper imageMapper;
    @Autowired
    ImageService imageService;

    /**
     * 获得指定用户的店铺
     * @param userId
     * @return
     */
    @Override
    public BackJson getMarketByUserId(int userId) {
        BackJson backJson = new BackJson();
        Market market = marketMapper.selectByUserId(userId);
        if(market == null) {
            backJson.setStatus(false);
            backJson.setValue("查找失败,没有对应的店铺!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(market);
        }
        return backJson;
    }

    /**
     * 通过marketId获得market信息
     * @param marketId
     * @return
     */
    @Override
    public BackJson getMarketByMarketId(int marketId) {
        BackJson backJson = new BackJson();
        Market market = marketMapper.selectByPrimaryKey(marketId);
        if(market == null) {
            backJson.setStatus(false);
            backJson.setValue("查找失败,没有对应的店铺!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(market);
        }
        return backJson;
    }

    /**
     * 注册店铺信息——注册成功后返回店铺信息
     * @param market
     * @return
     */
    @Override
    public BackJson registerMarket(Market market) {
        BackJson backJson = new BackJson();
        market.setIsdelete(0);
        int result = marketMapper.insert(market);
        if(result == 0){
            backJson.setStatus(false);
            backJson.setValue("注册失败,请稍后重试!");
        }else{
            List<Image> imageLocationPics = market.getMarketLocationPics();
            for(Image image: imageLocationPics) {
                image.setIsdelete(0);
                image.setImageFrom("market");
                image.setImageType("location");
                image.setObjectId(market.getMarketId());
                imageMapper.insert(image);
            }
            List<Image> marketInfoPics = market.getMarketInfoPics();
            for(Image image: marketInfoPics) {
                image.setIsdelete(0);
                image.setImageFrom("market");
                image.setImageType("info");
                image.setObjectId(market.getMarketId());
                imageMapper.insert(image);
            }
            backJson.setStatus(true);
            backJson.setValue(market);
        }
        return backJson;
    }

    /**
     * 获得所有market列表
     * @return
     */
    @Override
    public BackJson getAllMarket() {
        BackJson backJson = new BackJson();
        List<Market> markets = marketMapper.selectAll();
        if(markets == null){
            backJson.setStatus(false);
            backJson.setValue("查询失败,当前没有商家注册!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(markets);
        }
        return backJson;
    }

    /**
     * 修改market信息
     * @param market
     * @return
     */
    @Override
    public BackJson changeMarketInfo(Market market) {
        BackJson backJson = new BackJson();
        int result = marketMapper.updateByPrimaryKeySelective(market);
        if(result == 0){
            backJson.setStatus(false);
            backJson.setValue("修改失败!");
        }else {
            List<Image> imageLocationPics = market.getMarketLocationPics();
            for(Image image: imageLocationPics) {
                image.setIsdelete(0);
                image.setImageFrom("market");
                image.setImageType("location");
                image.setObjectId(market.getMarketId());
                imageService.uploadImage(image);
            }
            List<Image> marketInfoPics = market.getMarketInfoPics();
            for(Image image: marketInfoPics) {
                image.setIsdelete(0);
                image.setImageFrom("market");
                image.setImageType("info");
                image.setObjectId(market.getMarketId());
                imageService.uploadImage(image);
            }
            backJson.setStatus(true);
            backJson.setValue(market);
        }
        return backJson;
    }

    /**
     * 通过marketId将指定market的isdelete变成1
     * @param marketId
     * @return
     */
    @Override
    public BackJson deleteMarketInfo(int marketId) {
        BackJson backJson = new BackJson();
        int result = marketMapper.updateMarketInfoToDelete(marketId);
        if(result == 0){
            backJson.setStatus(false);
            backJson.setValue("删除失败!");
        }else {
            backJson.setStatus(true);
            backJson.setValue("删除成功!");
        }
        return backJson;
    }

    @Override
    public BackJson getAllMarketLikeAddress(String userAddress) {
        BackJson backJson = new BackJson();
        List<Market> markets = marketMapper.selectAllLikeAddress(userAddress);
        if(markets == null){
            backJson.setStatus(false);
            backJson.setValue("查询失败,当前没有商家注册!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(markets);
        }
        return backJson;
    }
}