package com.graduation.foodsystem.model;

import java.util.List;

public class Market {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column market.market_id
     *
     * @mbg.generated
     */
    private Integer marketId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column market.market_name
     *
     * @mbg.generated
     */
    private String marketName;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column market.market_address
     *
     * @mbg.generated
     */
    private String marketAddress;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column market.market_detail
     *
     * @mbg.generated
     */
    private String marketDetail;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column market.market_phone
     *
     * @mbg.generated
     */
    private String marketPhone;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column market.user_id
     *
     * @mbg.generated
     */
    private Integer userId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column market.isdelete
     *
     * @mbg.generated
     */
    private Integer isdelete;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column market.market_id
     *
     * @return the value of market.market_id
     *
     * @mbg.generated
     */
    public Integer getMarketId() {
        return marketId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column market.market_id
     *
     * @param marketId the value for market.market_id
     *
     * @mbg.generated
     */
    public void setMarketId(Integer marketId) {
        this.marketId = marketId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column market.market_name
     *
     * @return the value of market.market_name
     *
     * @mbg.generated
     */
    public String getMarketName() {
        return marketName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column market.market_name
     *
     * @param marketName the value for market.market_name
     *
     * @mbg.generated
     */
    public void setMarketName(String marketName) {
        this.marketName = marketName == null ? null : marketName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column market.market_address
     *
     * @return the value of market.market_address
     *
     * @mbg.generated
     */
    public String getMarketAddress() {
        return marketAddress;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column market.market_address
     *
     * @param marketAddress the value for market.market_address
     *
     * @mbg.generated
     */
    public void setMarketAddress(String marketAddress) {
        this.marketAddress = marketAddress == null ? null : marketAddress.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column market.market_detail
     *
     * @return the value of market.market_detail
     *
     * @mbg.generated
     */
    public String getMarketDetail() {
        return marketDetail;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column market.market_detail
     *
     * @param marketDetail the value for market.market_detail
     *
     * @mbg.generated
     */
    public void setMarketDetail(String marketDetail) {
        this.marketDetail = marketDetail == null ? null : marketDetail.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column market.market_phone
     *
     * @return the value of market.market_phone
     *
     * @mbg.generated
     */
    public String getMarketPhone() {
        return marketPhone;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column market.market_phone
     *
     * @param marketPhone the value for market.market_phone
     *
     * @mbg.generated
     */
    public void setMarketPhone(String marketPhone) {
        this.marketPhone = marketPhone == null ? null : marketPhone.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column market.user_id
     *
     * @return the value of market.user_id
     *
     * @mbg.generated
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column market.user_id
     *
     * @param userId the value for market.user_id
     *
     * @mbg.generated
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column market.isdelete
     *
     * @return the value of market.isdelete
     *
     * @mbg.generated
     */
    public Integer getIsdelete() {
        return isdelete;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column market.isdelete
     *
     * @param isdelete the value for market.isdelete
     *
     * @mbg.generated
     */
    public void setIsdelete(Integer isdelete) {
        this.isdelete = isdelete;
    }

    //店铺信息，如店铺外景等
    public List<Image> marketLocationPics;

    //店铺注册信息，如营业许可证等
    public List<Image> marketInfoPics;

    //店铺商品列表
    public List<Product> products;

    //店铺订单列表
    public List<Order> orders;

    public List<Image> getMarketLocationPics() {
        return marketLocationPics;
    }

    public void setMarketLocationPics(List<Image> marketLocationPics) {
        this.marketLocationPics = marketLocationPics;
    }

    public List<Image> getMarketInfoPics() {
        return marketInfoPics;
    }

    public void setMarketInfoPics(List<Image> marketInfoPics) {
        this.marketInfoPics = marketInfoPics;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}