package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.mapper.CategoryMapper;
import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Category;
import com.graduation.foodsystem.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryMapper categoryMapper;

    /**
     * 设置商品分类信息
     * @param category
     * @return
     */
    @Override
    public BackJson defineCategory(Category category) {
        BackJson backJson = new BackJson();
        category.setIsdelete(0);
        int result = categoryMapper.insert(category);
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("商品分类设置失败!");
        }else {
            backJson.setStatus(true);
            backJson.setValue("商品分类设置成功!");
        }
        return backJson;
    }

    /**
     * 获得所有商品分类列表
     * @return
     */
    @Override
    public BackJson getAllCategory() {
        BackJson backJson = new BackJson();
        List<Category> categoryList = categoryMapper.selectAll();
        if(categoryList == null){
            backJson.setStatus(false);
            backJson.setValue("当前没有任何商品分类!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(categoryList);
        }
        return backJson;
    }

    /**
     * 删除指定商品分类
     * @param categoryId
     * @return
     */
    @Override
    public BackJson deleteCategory(int categoryId) {
        BackJson backJson = new BackJson();
        int result = categoryMapper.deleteByPrimaryKey(categoryId);
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("商品分类删除失败!");
        }else {
            backJson.setStatus(true);
            backJson.setValue("商品分类删除成功!");
        }
        return backJson;
    }
}