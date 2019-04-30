package com.graduation.foodsystem.controller;


import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Order;
import com.graduation.foodsystem.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/order")
@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    /**
     * 用户提交订单
     * @param order
     * @return
     */
    @PostMapping
    public BackJson submitOrder(@RequestBody Order order) {
        return orderService.submitOrder(order);
    }

    /**
     * 删除订单
     * @param orderId
     * @return
     */
    @DeleteMapping("/{orderId}")
    public BackJson deleteOrder(@PathVariable("orderId")int orderId) {
        return orderService.deleteOrder(orderId);
    }

    /**
     * 修改订单
     * @param order
     * @return
     */
    @PutMapping
    public BackJson changeOrder(@RequestBody Order order) {
        return orderService.changeOrder(order);
    }

    /**
     * 获得店铺中所有的订单
     * @param marketId 指定店铺
     * @return
     */
    @GetMapping("/{marketId}")
    public BackJson getAllMarketOrder(@PathVariable("marketId")int marketId) {
        return orderService.getAllMarketOrder(marketId);
    }

    /**
     * 获得店铺中所有open的order
     * open即orderstatus=1
     * @param marketId
     * @return
     */
    @GetMapping("/open/{marketId}")
    public BackJson getAllMarketOpenOrder(@PathVariable("marketId")int marketId) {
        return orderService.getAllMarketOpenOrder(marketId);
    }

    /**
     * 获得店铺中所有完成的订单
     * closed即orderstatus=2
     * @param marketId
     * @return
     */
    @GetMapping("/closed/{marketId}")
    public BackJson getAllMarketClosedOrder(@PathVariable("marketId")int marketId) {
        return orderService.getAllMarketClosedOrder(marketId);
    }

    /**
     * 获得用户的所有订单
     * @param userId
     * @return
     */
    @GetMapping("/user/all")
    public BackJson getAllOrderByUser(@RequestParam("userId") int userId) {
        return orderService.getAllOrderByUser(userId);
    }

    /**
     * 获得用户所有open的订单
     * @param userId
     * @return
     */
    @GetMapping("/user/open")
    public BackJson getAllOpenOrderByUser(@RequestParam("userId") int userId) {
        return orderService.getAllOpenOrderByUser(userId);
    }

    /**
     * 获得使用户所有closed的订单
     * @param userId
     * @return
     */
    @GetMapping("/user/closed")
    public BackJson getAllClosedOrderByUser(@RequestParam("userId") int userId) {
        return orderService.getAllClosedOrderByUser(userId);
    }
}