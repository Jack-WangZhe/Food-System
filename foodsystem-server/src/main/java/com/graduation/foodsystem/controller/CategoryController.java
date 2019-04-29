package com.graduation.foodsystem.controller;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Category;
import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/category")
@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    /**
     * 增加商品分类
     * @param category
     * @return
     */
    @PostMapping
    public BackJson defineCategory(@RequestBody Category category) {
        return categoryService.defineCategory(category);
    }

    /**
     * 获得所有商品分类
     * @return
     */
    @GetMapping
    public BackJson getAllCategory() {
        return categoryService.getAllCategory();
    }

    /**
     * 删除指定该商品分类名
     */
    @DeleteMapping("/{categoryId}")
    public BackJson deleteCategory(@PathVariable("categoryId")int categoryId) {
        return categoryService.deleteCategory(categoryId);
    }

}