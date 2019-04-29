package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.mapper.UserMapper;
import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.User;
import com.graduation.foodsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    /**
     * 用户注册
     * <p>
     * 如果注册成功，提示注册成功
     * 如果注册失败，提示注册失败请重试！
     * @param user
     * @return
     */
    @Override
    public BackJson register(User user) {
        BackJson backJson = new BackJson();
        int value = 0;
        try {
            value = userMapper.insert(user);
        }catch (Exception e){}
        if(value == 0) {
            backJson.setStatus(false);
            backJson.setValue("注册失败,请重试!");
        }else {
            backJson.setStatus(true);
            backJson.setValue("注册成功!");
        }
        return backJson;
    }

    /**
     * 用户登录
     * <p>
     * 如果用户名或者密码没填写，提示用户名和密码不能为空
     * 如果数据库中没有对应的用户名或密码，提示用户名或密码有误
     * 如果成功查询到对应的用户，则返回用户信息
     * @param username
     * @param password
     * @return
     */
    @Override
    public BackJson login(String username, String password) {
        BackJson backJson = new BackJson();
        if(username.equals("") || password.equals("")){
            backJson.setStatus(false);
            backJson.setValue("用户名和密码不能为空!");
        }else {
            User user = userMapper.selectByUsernamePassword(username, password);
            if(user == null) {
                backJson.setStatus(false);
                backJson.setValue("用户名或密码有误，请重新输入!");
            }else{
                backJson.setStatus(true);
                backJson.setValue(user);
            }
        }
        return backJson;
    }
}