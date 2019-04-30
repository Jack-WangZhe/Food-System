package com.graduation.foodsystem.mapper;

import com.graduation.foodsystem.model.OrderProductRef;

public interface OrderProductRefMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table order_product_ref
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer refId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table order_product_ref
     *
     * @mbg.generated
     */
    int insert(OrderProductRef record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table order_product_ref
     *
     * @mbg.generated
     */
    int insertSelective(OrderProductRef record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table order_product_ref
     *
     * @mbg.generated
     */
    OrderProductRef selectByPrimaryKey(Integer refId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table order_product_ref
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(OrderProductRef record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table order_product_ref
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(OrderProductRef record);
}