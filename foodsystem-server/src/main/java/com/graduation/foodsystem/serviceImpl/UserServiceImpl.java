package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.mapper.UserMapper;
import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.User;
import com.graduation.foodsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

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
        user.setIsdelete(0);//设置用户的状态为可见
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

    /**
     * 修改用户信息——用户自己可以修改、管理员可以修改
     * @param user
     * @return
     */
    @Override
    public BackJson changeUserInfo(User user) {
        BackJson backJson = new BackJson();
        int result = userMapper.updateByPrimaryKeySelective(user);//如果没填写的内容则不会被修改
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("修改失败!");
        }else {
            backJson.setStatus(true);
            backJson.setValue("信息修改成功!");
        }
        return backJson;
    }

    /**
     * 删除指定用户——将isdelete变成1
     * @param user
     * @return
     */
    @Override
    public BackJson deleteUserInfo(User user) {
        BackJson backJson = new BackJson();
        int result = userMapper.deleteUser(user);
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("删除失败!");
        }else {
            backJson.setStatus(true);
            backJson.setValue("删除成功!");
        }
        return backJson;
    }

    /**
     * 获得所有用户列表
     * @return
     */
    @Override
    public BackJson getAllUserList() {
        BackJson backJson = new BackJson();
        List<User> userList = userMapper.selectAll();
        if(userList == null) {
            backJson.setStatus(false);
            backJson.setValue("当前系统中没有用户!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(userList);
        }
        return backJson;
    }
}