package com.graduation.foodsystem.controller;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Image;
import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RequestMapping("/image")
@RestController
public class ImageController {

    @Autowired
    ImageService imageService;

    /**
     * 获得指定imageId的信息
     * @param imageId
     * @return
     */
    @GetMapping("/option/{imageId}")
    public BackJson getImageUrl(@PathVariable("imageId")int imageId) {
        return imageService.getImageUrl(imageId);
    }

    /**
     * 上传图片
     * <p>
     * 返回图片链接
     * @param file
     * @return
     */
    @PostMapping("/upload")
    public BackJson uploadImage(@RequestParam(value = "file") MultipartFile file){
        return imageService.uploadImage(file);
    }

}