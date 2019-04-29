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

    /**
     * 登录用户
     * @param username
     * @param password
     * @return
     */
    @GetMapping(value="/login")
    public BackJson login(@RequestParam("username") String username, @RequestParam("password") String password) {
        return userService.login(username,password);
    }

    /**
     * 注册用户
     * @param user
     * @return
     */
    @PostMapping(value = "/register")
    public BackJson register(@RequestBody User user) {
        return userService.register(user);
    }

    /**
     * 获得所有用户信息
     * <p>
     * 包括被逻辑删除的
     * @return
     */
    @GetMapping(value = "/alllist")
    public BackJson getAllUserList() {
        return userService.getAllUserList();
    }

    /**
     * 修改用户信息
     * <p>
     * 被删除的用户可以通过修改信息回复isdelete为0
     * @param user
     * @return
     */
    @PutMapping(value = "/info")
    public BackJson changeUserInfo(@RequestBody User user) {
        return userService.changeUserInfo(user);
    }

    /**
     * 删除指定用户
     * 将isdelete变成1
     * @param user
     * @return
     */
    @DeleteMapping(value = "/info")
    public BackJson deleteUserInfo(@RequestBody User user) {
        return userService.deleteUserInfo(user);
    }
}