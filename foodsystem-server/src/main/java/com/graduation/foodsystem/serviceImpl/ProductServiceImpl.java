package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.mapper.ImageMapper;
import com.graduation.foodsystem.mapper.ProductMapper;
import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Image;
import com.graduation.foodsystem.model.Product;
import com.graduation.foodsystem.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductMapper productMapper;
    @Autowired
    ImageMapper imageMapper;

    /**
     * 添加商品
     * @param product
     * @return
     */
    @Override
    public BackJson addProduct(Product product) {
        BackJson backJson = new BackJson();
        int result = productMapper.insert(product);
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("商品注册失败!");
        }else {
            List<Image> imageInfoPics = product.getProductPics();
            for(Image image: imageInfoPics) {
                image.setIsdelete(0);
                image.setImageFrom("production");
                image.setImageType("info");
                image.setObjectId(product.getProductId());
                imageMapper.insert(image);
            }
            backJson.setStatus(true);
            backJson.setValue(product);
        }
        return backJson;
    }

    @Override
    public BackJson changeProductInfo(Product product) {
        return null;
    }

    @Override
    public BackJson deleteProduct(int productId) {
        return null;
    }

    @Override
    public BackJson getProductInfo(int productId) {
        return null;
    }

    @Override
    public BackJson getAllProductInfoByMarketId(int marketId) {
        return null;
    }
}