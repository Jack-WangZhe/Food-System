package com.graduation.foodsystem.controller;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.User;
import com.graduation.foodsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/user")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    //登录用户
    @RequestMapping(value="/login", method = RequestMethod.GET)
    public BackJson login(@RequestParam("username") String username, @RequestParam("password") String password) {
        return userService.login(username,password);
    }

    //注册用户
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public BackJson register(@RequestBody User user) {
        return userService.register(user);
    }


}