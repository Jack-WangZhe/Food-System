package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.mapper.EvaluateMapper;
import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Evaluate;
import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.EvaluateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EvaluateServiceImpl implements EvaluateService {

    @Autowired
    EvaluateMapper evaluateMapper;

    /**
     * 用户提交评价信息
     * @param evaluate
     * @return
     */
    @Override
    public BackJson submitEvalute(Evaluate evaluate) {
        BackJson backJson = new BackJson();
        evaluate.setIsdelete(0);
        int result = evaluateMapper.insert(evaluate);
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("评价提交失败!");
        }else {
            backJson.setStatus(true);
            backJson.setValue("评价提交成功!");
        }
        return backJson;
    }

    /**
     * 用户/商家删除评价
     * @param evaluateId
     * @return
     */
    @Override
    public BackJson deleteEvaluate(int evaluateId) {
        BackJson backJson = new BackJson();
        int result = evaluateMapper.deleteByEvaluateId(evaluateId);
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("评价删除失败!");
        }else {
            backJson.setStatus(true);
            backJson.setValue("评价删除成功!");
        }
        return backJson;
    }

    /**
     * 获得指定用户的所有评价信息
     * @param userId
     * @return
     */
    @Override
    public BackJson getEvaluateByUserId(int userId) {
        BackJson backJson = new BackJson();
        List<Evaluate> evaluateList = evaluateMapper.selectByUserId(userId);
        if(evaluateList == null) {
            backJson.setStatus(false);
            backJson.setValue("用户没有任何评价记录!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(evaluateList);
        }
        return backJson;
    }
}