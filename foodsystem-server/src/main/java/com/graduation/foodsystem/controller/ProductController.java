package com.graduation.foodsystem.controller;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Product;
import com.graduation.foodsystem.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/product")
@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    /**
     * 上传店铺产品信息
     * @param product
     * @return
     */
    @PostMapping
    public BackJson addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    /**
     * 删除指定product
     * @param productId
     * @return
     */
    @DeleteMapping("/{productId}")
    public BackJson deleteProduct(@PathVariable("productId")int productId) {
        return productService.deleteProduct(productId);
    }

    /**
     * 修改product内容
     * @param product
     * @return
     */
    @PutMapping
    public BackJson changeProductInfo(@RequestBody Product product) {
        return productService.changeProductInfo(product);
    }

    /**
     * 通过productId获得详情
     * @param productId
     * @return
     */
    @GetMapping("/{productId}")
    public BackJson getProductInfo(@PathVariable("productId")int productId) {
        return productService.getProductInfo(productId);
    }

    /**
     * 获得指定店铺中的所有product
     * @param marketId
     * @return
     */
    @GetMapping("/allinmarket/{marketId}")
    public BackJson getAllProductInfoByMarketId(@PathVariable("marketId")int marketId) {
        return productService.getAllProductInfoByMarketId(marketId);
    }

}