package com.graduation.foodsystem.service;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Category;
import org.springframework.stereotype.Service;

@Service
public interface CategoryService {

    BackJson defineCategory(Category category);

    BackJson getAllCategory();

    BackJson deleteCategory(int categoryId);
}