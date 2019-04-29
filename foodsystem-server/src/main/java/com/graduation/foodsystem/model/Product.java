package com.graduation.foodsystem.model;

public class Product {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column product.product_id
     *
     * @mbg.generated
     */
    private Integer productId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column product.product_name
     *
     * @mbg.generated
     */
    private String productName;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column product.product_detail
     *
     * @mbg.generated
     */
    private String productDetail;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column product.product_price
     *
     * @mbg.generated
     */
    private Integer productPrice;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column product.category_id
     *
     * @mbg.generated
     */
    private Integer categoryId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column product.market_id
     *
     * @mbg.generated
     */
    private Integer marketId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column product.isdelete
     *
     * @mbg.generated
     */
    private Integer isdelete;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column product.product_id
     *
     * @return the value of product.product_id
     *
     * @mbg.generated
     */
    public Integer getProductId() {
        return productId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column product.product_id
     *
     * @param productId the value for product.product_id
     *
     * @mbg.generated
     */
    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column product.product_name
     *
     * @return the value of product.product_name
     *
     * @mbg.generated
     */
    public String getProductName() {
        return productName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column product.product_name
     *
     * @param productName the value for product.product_name
     *
     * @mbg.generated
     */
    public void setProductName(String productName) {
        this.productName = productName == null ? null : productName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column product.product_detail
     *
     * @return the value of product.product_detail
     *
     * @mbg.generated
     */
    public String getProductDetail() {
        return productDetail;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column product.product_detail
     *
     * @param productDetail the value for product.product_detail
     *
     * @mbg.generated
     */
    public void setProductDetail(String productDetail) {
        this.productDetail = productDetail == null ? null : productDetail.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column product.product_price
     *
     * @return the value of product.product_price
     *
     * @mbg.generated
     */
    public Integer getProductPrice() {
        return productPrice;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column product.product_price
     *
     * @param productPrice the value for product.product_price
     *
     * @mbg.generated
     */
    public void setProductPrice(Integer productPrice) {
        this.productPrice = productPrice;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column product.category_id
     *
     * @return the value of product.category_id
     *
     * @mbg.generated
     */
    public Integer getCategoryId() {
        return categoryId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column product.category_id
     *
     * @param categoryId the value for product.category_id
     *
     * @mbg.generated
     */
    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column product.market_id
     *
     * @return the value of product.market_id
     *
     * @mbg.generated
     */
    public Integer getMarketId() {
        return marketId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column product.market_id
     *
     * @param marketId the value for product.market_id
     *
     * @mbg.generated
     */
    public void setMarketId(Integer marketId) {
        this.marketId = marketId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column product.isdelete
     *
     * @return the value of product.isdelete
     *
     * @mbg.generated
     */
    public Integer getIsdelete() {
        return isdelete;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column product.isdelete
     *
     * @param isdelete the value for product.isdelete
     *
     * @mbg.generated
     */
    public void setIsdelete(Integer isdelete) {
        this.isdelete = isdelete;
    }
}