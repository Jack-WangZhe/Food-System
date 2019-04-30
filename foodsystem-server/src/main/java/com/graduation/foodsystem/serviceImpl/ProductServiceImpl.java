package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.mapper.ImageMapper;
import com.graduation.foodsystem.mapper.ProductMapper;
import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Image;
import com.graduation.foodsystem.model.Product;
import com.graduation.foodsystem.service.ImageService;
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
    @Autowired
    ImageService imageService;

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

    /**
     * 修改商品信息
     * @param product
     * @return
     */
    @Override
    public BackJson changeProductInfo(Product product) {
        BackJson backJson = new BackJson();
        int result = productMapper.updateByPrimaryKey(product);
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("商品信息修改失败!");
        }else {
            List<Image> imageInfoPics = product.getProductPics();
            for(Image image: imageInfoPics) {
                image.setIsdelete(0);
                image.setImageFrom("production");
                image.setImageType("info");
                image.setObjectId(product.getProductId());
                imageService.uploadImage(image);
            }
            backJson.setStatus(true);
            backJson.setValue(product);
        }
        return backJson;
    }

    /**
     * 删除商品
     * @param productId
     * @return
     */
    @Override
    public BackJson deleteProduct(int productId) {
        BackJson backJson = new BackJson();
        int result = productMapper.deleteByProductId(productId);
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("商品删除失败!");
        }else {
            backJson.setStatus(true);
            backJson.setValue("商品删除成功!");
        }
        return null;
    }

    /**
     * 通过productId查询商品信息
     * @param productId
     * @return
     */
    @Override
    public BackJson getProductInfo(int productId) {
        BackJson backJson = new BackJson();
        Product product = productMapper.selectByPrimaryKey(productId);
        if(product == null) {
            backJson.setStatus(false);
            backJson.setValue("查询失败,该商品不存在!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(product);
        }
        return backJson;
    }

    /**
     * 通过marketId查询所有的店铺信息
     * @param marketId
     * @return
     */
    @Override
    public BackJson getAllProductInfoByMarketId(int marketId) {
        BackJson backJson = new BackJson();
        List<Product> products = productMapper.selectAllProductByMarketId(marketId);
        if(products == null) {
            backJson.setStatus(false);
            backJson.setValue("查询失败,店铺不存在商品!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(products);
        }
        return backJson;
    }
}