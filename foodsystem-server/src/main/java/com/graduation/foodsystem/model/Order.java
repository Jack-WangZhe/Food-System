package com.graduation.foodsystem.model;

import java.util.Date;
import java.util.List;

public class Order {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order.order_id
     *
     * @mbg.generated
     */
    private Integer orderId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order.user_id
     *
     * @mbg.generated
     */
    private Integer userId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order.market_id
     *
     * @mbg.generated
     */
    private Integer marketId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order.orderdate
     *
     * @mbg.generated
     */
    private Date orderdate;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order.orderprice
     *
     * @mbg.generated
     */
    private Integer orderprice;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order.orderstatus
     *
     * @mbg.generated
     */
    private Integer orderstatus;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column order.isdelete
     *
     * @mbg.generated
     */
    private Integer isdelete;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order.order_id
     *
     * @return the value of order.order_id
     *
     * @mbg.generated
     */
    public Integer getOrderId() {
        return orderId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order.order_id
     *
     * @param orderId the value for order.order_id
     *
     * @mbg.generated
     */
    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order.user_id
     *
     * @return the value of order.user_id
     *
     * @mbg.generated
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order.user_id
     *
     * @param userId the value for order.user_id
     *
     * @mbg.generated
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order.market_id
     *
     * @return the value of order.market_id
     *
     * @mbg.generated
     */
    public Integer getMarketId() {
        return marketId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order.market_id
     *
     * @param marketId the value for order.market_id
     *
     * @mbg.generated
     */
    public void setMarketId(Integer marketId) {
        this.marketId = marketId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order.orderdate
     *
     * @return the value of order.orderdate
     *
     * @mbg.generated
     */
    public Date getOrderdate() {
        return orderdate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order.orderdate
     *
     * @param orderdate the value for order.orderdate
     *
     * @mbg.generated
     */
    public void setOrderdate(Date orderdate) {
        this.orderdate = orderdate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order.orderprice
     *
     * @return the value of order.orderprice
     *
     * @mbg.generated
     */
    public Integer getOrderprice() {
        return orderprice;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order.orderprice
     *
     * @param orderprice the value for order.orderprice
     *
     * @mbg.generated
     */
    public void setOrderprice(Integer orderprice) {
        this.orderprice = orderprice;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order.orderstatus
     *
     * @return the value of order.orderstatus
     *
     * @mbg.generated
     */
    public Integer getOrderstatus() {
        return orderstatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order.orderstatus
     *
     * @param orderstatus the value for order.orderstatus
     *
     * @mbg.generated
     */
    public void setOrderstatus(Integer orderstatus) {
        this.orderstatus = orderstatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column order.isdelete
     *
     * @return the value of order.isdelete
     *
     * @mbg.generated
     */
    public Integer getIsdelete() {
        return isdelete;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column order.isdelete
     *
     * @param isdelete the value for order.isdelete
     *
     * @mbg.generated
     */
    public void setIsdelete(Integer isdelete) {
        this.isdelete = isdelete;
    }

    //一个订单中有多个商品
    private List<Product> productList;

    //订单的下单人
    private User user;

    //订单的评价
    private Evaluate evaluate;

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Evaluate getEvaluate() {
        return evaluate;
    }

    public void setEvaluate(Evaluate evaluate) {
        this.evaluate = evaluate;
    }
}