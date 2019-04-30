package com.graduation.foodsystem.controller;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Evaluate;
import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.EvaluateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/evaluate")
@RestController
public class EvaluateController {

    @Autowired
    EvaluateService evaluateService;

    //注意：不提供修改评价的接口，因为用户提交之后应该不可以修改评价，商家也没必要修改用户的评价，觉得违规删除即可

    /**
     * 提交评价信息
     * @param evaluate
     * @return
     */
    @PostMapping
    public BackJson submitEvalute(@RequestBody Evaluate evaluate) {
        return evaluateService.submitEvalute(evaluate);
    }

    /**
     * 删除评价信息
     * @param evaluateId
     * @return
     */
    @DeleteMapping("/{evaluateId}")
    public BackJson deleteEvaluate(@PathVariable("evaluateId")int evaluateId) {
        return evaluateService.deleteEvaluate(evaluateId);
    }

    /**
     * 用户查看自己的所有评价信息
     * @param userId
     * @return
     */
    @GetMapping("/user")
    public BackJson getEvaluateByUserId(@RequestParam("userId")int userId) {
        return evaluateService.getEvaluateByUserId(userId);
    }
}