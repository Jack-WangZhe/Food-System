package com.graduation.foodsystem.mapper;

import com.graduation.foodsystem.model.Image;

import java.util.List;
import java.util.Map;

public interface ImageMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table image
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer imageId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table image
     *
     * @mbg.generated
     */
    int insert(Image record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table image
     *
     * @mbg.generated
     */
    int insertSelective(Image record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table image
     *
     * @mbg.generated
     */
    Image selectByPrimaryKey(Integer imageId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table image
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(Image record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table image
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(Image record);

    List<Image> selectByObjectId(int objectId);

    List<Image> selectByImageInfo(Map<String , Object> map);

    Image selectByImageUrl(String imageUrl);
}