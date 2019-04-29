package com.graduation.foodsystem.service;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    public BackJson register(User user);

    public BackJson login(String username, String password);

    BackJson changeUserInfo(User user);

    BackJson deleteUserInfo(User user);

    BackJson getAllUserList();
}