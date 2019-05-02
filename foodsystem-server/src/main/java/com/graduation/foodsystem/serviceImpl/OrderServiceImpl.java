package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.mapper.OrderMapper;
import com.graduation.foodsystem.mapper.OrderProductRefMapper;
import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Order;
import com.graduation.foodsystem.model.OrderProductRef;
import com.graduation.foodsystem.model.Product;
import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderMapper orderMapper;
    @Autowired
    OrderProductRefMapper orderProductRefMapper;

    /**
     * 提交订单
     * @param order
     * @return
     */
    @Override
    public BackJson submitOrder(Order order) {
        BackJson backJson = new BackJson();
        int result = orderMapper.insert(order);
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("订单添加失败");
        }else {
            List<OrderProductRef> productList = order.getProductList();
            for(OrderProductRef orderProductRef: productList) {
                orderProductRef.setOrderId(order.getOrderId());
                orderProductRefMapper.insert(orderProductRef);
            }
            backJson.setStatus(true);
            backJson.setValue(order);
        }
        return backJson;
    }

    /**
     * 删除指定的订单
     * @param orderId
     * @return
     */
    @Override
    public BackJson deleteOrder(int orderId) {
        BackJson backJson = new BackJson();
        int result = orderMapper.deleteByOrderId(orderId);
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
     * 修改订单信息
     * @param order
     * @return
     */
    @Override
    public BackJson changeOrder(Order order) {
        BackJson backJson = new BackJson();
        int result = orderMapper.updateByPrimaryKeySelective(order);
        if(result == 0) {
            backJson.setStatus(false);
            backJson.setValue("修改失败!");
        }else {
            List<OrderProductRef> orderProductRefs = order.getProductList();
            List<OrderProductRef> currentRefsInDatabase = orderProductRefMapper.selectByOrderId(order.getOrderId());
            //如果没有orderId说明是新加的
            for(OrderProductRef orderProductRef: orderProductRefs) {
                if(orderProductRef.getOrderId() == null) {
                    orderProductRefMapper.insert(orderProductRef);
                }
            }
            //检查数据库中如果有的,传递的没有的话，则说明删除了
            for(OrderProductRef currentRef: currentRefsInDatabase) {
                boolean removed = true;
                for (OrderProductRef orderProductRef : orderProductRefs) {
                    if (currentRef.getOrderId() == orderProductRef.getOrderId()) {
                        orderProductRefMapper.updateByPrimaryKey(orderProductRef);
                        removed = false;
                    }
                }
                //如果是true则表示当前传过来的数据没有数据库中的数据
                if (removed) {
                    orderProductRefMapper.deleteByPrimaryKey(currentRef.getRefId());
                }
            }
            backJson.setStatus(true);
            backJson.setValue("修改成功!");
        }
        return backJson;
    }

    /**
     * 获得marketId下的所有order
     * @param marketId
     * @return
     */
    @Override
    public BackJson getAllMarketOrder(int marketId) {
        BackJson backJson = new BackJson();
        List<Order> orders = orderMapper.selectByMarketId(marketId);
        if(orders == null){
            backJson.setStatus(false);
            backJson.setValue("查询失败,当前market下没有订单!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(orders);
        }
        return backJson;
    }

    /**
     * 获得marketId下所有开启的order
     * @param marketId
     * @return
     */
    @Override
    public BackJson getAllMarketOpenOrder(int marketId) {
        BackJson backJson = new BackJson();
        List<Order> orders = orderMapper.selectByMarketIdStatusIsOpen(marketId);
        if(orders == null){
            backJson.setStatus(false);
            backJson.setValue("查询失败,当前market下没有正在开启的订单!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(orders);
        }
        return backJson;
    }

    /**
     * 查看marketId所有完成的订单
     * @param marketId
     * @return
     */
    @Override
    public BackJson getAllMarketClosedOrder(int marketId) {
        BackJson backJson = new BackJson();
        List<Order> orders = orderMapper.selectByMarketIdStatusIsClosed(marketId);
        if(orders == null){
            backJson.setStatus(false);
            backJson.setValue("查询失败,当前market下没有完成的订单!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(orders);
        }
        return backJson;
    }

    /**
     * 查看userId所有的订单
     * @param userId
     * @return
     */
    @Override
    public BackJson getAllOrderByUser(int userId) {
        BackJson backJson = new BackJson();
        List<Order> orders = orderMapper.selectByUserId(userId);
        if(orders == null){
            backJson.setStatus(false);
            backJson.setValue("查询失败,当前用户没有订单!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(orders);
        }
        return backJson;
    }

    /**
     * 查看userId所有开启的订单
     * @param userId
     * @return
     */
    @Override
    public BackJson getAllOpenOrderByUser(int userId) {
        BackJson backJson = new BackJson();
        List<Order> orders = orderMapper.selectByUserIdStatusIsOpen(userId);
        if(orders == null){
            backJson.setStatus(false);
            backJson.setValue("查询失败,当前用户没有开启的订单!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(orders);
        }
        return backJson;
    }

    /**
     * 查看userId所有关闭的订单
     * @param userId
     * @return
     */
    @Override
    public BackJson getAllClosedOrderByUser(int userId) {
        BackJson backJson = new BackJson();
        List<Order> orders = orderMapper.selectByUserIdStatusIsClosed(userId);
        if(orders == null){
            backJson.setStatus(false);
            backJson.setValue("查询失败,当前用户没有完成的订单!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(orders);
        }
        return backJson;
    }

    /**
     * 通过orderId查看订单详情
     * @param orderId
     * @return
     */
    @Override
    public BackJson getOrderById(int orderId) {
        BackJson backJson = new BackJson();
        Order order = orderMapper.selectByPrimaryKey(orderId);
        if(order == null){
            backJson.setStatus(false);
            backJson.setValue("查询失败,订单不存在!");
        }else {
            backJson.setStatus(true);
            backJson.setValue(order);
        }
        return backJson;
    }
}