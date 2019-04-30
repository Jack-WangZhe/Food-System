package com.graduation.foodsystem.service;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Order;
import org.springframework.stereotype.Service;

@Service
public interface OrderService {

    BackJson submitOrder(Order order);

    BackJson deleteOrder(int orderId);

    BackJson changeOrder(Order order);

    BackJson getAllMarketOrder(int marketId);

    BackJson getAllMarketOpenOrder(int marketId);

    BackJson getAllMarketClosedOrder(int marketId);

    BackJson getAllOrderByUser(int userId);

    BackJson getAllOpenOrderByUser(int userId);

    BackJson getAllClosedOrderByUser(int userId);
}