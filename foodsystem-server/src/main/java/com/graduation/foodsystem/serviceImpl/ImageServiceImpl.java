package com.graduation.foodsystem.serviceImpl;

import com.graduation.foodsystem.mapper.ImageMapper;
import com.graduation.foodsystem.model.BackJson;
import com.graduation.foodsystem.model.Image;
import com.graduation.foodsystem.service.CategoryService;
import com.graduation.foodsystem.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class ImageServiceImpl implements ImageService {

    @Value("${foodsystem.picture.url}")
    private String picturlUrl;

    @Autowired
    ImageMapper imageMapper;

    /**
     * 获得指定imageId的内容
     * @param imageId
     * @return
     */
    @Override
    public BackJson getImageUrl(int imageId) {
        BackJson backJson = new BackJson();
        Image image = imageMapper.selectByPrimaryKey(imageId);
        if(image == null) {
            backJson.setStatus(false);
            backJson.setValue("图片不存在!");
        }else{
            backJson.setStatus(true);
            backJson.setValue(image);
        }
        return backJson;
    }

    /**
     * 上传文件即存储文件并返回图片路径
     * @param file
     * @return
     */
    @Override
    public BackJson uploadImage(MultipartFile file) {
        BackJson backJson = new BackJson();
        if (file.isEmpty()) {
            backJson.setStatus(false);
            backJson.setValue("文件为空!");
        }else{
            String fileName = file.getOriginalFilename();  // 文件名
            String suffixName = fileName.substring(fileName.lastIndexOf("."));  // 后缀名
            String filePath = picturlUrl; // 上传的文件夹路径
            fileName = UUID.randomUUID() + suffixName; // 新文件名
            File dest = new File(filePath + fileName);
            //如果文件夹不存在则创建文件夹
            if (!dest.getParentFile().exists()) {
                dest.getParentFile().mkdirs();
            }
            try {
                file.transferTo(dest);
                backJson.setStatus(true);
                backJson.setValue(fileName);
            } catch (IOException e) {
                e.printStackTrace();
                backJson.setStatus(false);
                backJson.setValue("文件上传失败!");
            }
        }
        return backJson;
    }
}