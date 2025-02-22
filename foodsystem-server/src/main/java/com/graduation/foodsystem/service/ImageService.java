package com.graduation.foodsystem.service;

import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Image;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface ImageService {

    BackJson getImageUrl(int imageId);

    BackJson uploadImage(MultipartFile file);

    int addImage(Image image);

    boolean uploadImage(Image image);
}