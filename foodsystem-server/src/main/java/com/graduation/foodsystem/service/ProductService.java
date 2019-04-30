package com.graduation.foodsystem.service;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Product;
import org.springframework.stereotype.Service;

@Service
public interface ProductService {

    BackJson addProduct(Product product);

    BackJson changeProductInfo(Product product);

    BackJson deleteProduct(int productId);

    BackJson getProductInfo(int productId);

    BackJson getAllProductInfoByMarketId(int marketId);
}