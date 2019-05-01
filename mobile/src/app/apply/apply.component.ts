import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FileUploader, FileItem, FileLikeObject, ParsedResponseHeaders } from 'ng2-file-upload';
import { Toast } from 'ng-zorro-antd-mobile';
import { fileServer } from '../common/constants';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  @ViewChild('picture')
  picture:ElementRef;

  //图片列表
  license:Array<any> = [];
  shopPic:Array<any> = [];
  tempPicName = '';

  //店铺信息
  marketName = '';
  marketDetail = '';
  marketAddress = '';
  marketPhone = '';
  
  //上传图片组件
  uploader:FileUploader = new FileUploader({ 
    url: "/image/upload", 
    method: "POST", 
    itemAlias: "file",
    autoUpload: true,
    allowedFileType:["image"],
    maxFileSize:20971520,
    removeAfterUpload:true
  });

  source:string;

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private toast: Toast
  ) {}
  
  multiple = false;
  multipleTab = 0;

  //如果文件变更了，根据变更的文件名去替换对应的文件列表
  fileChange(params,tempPicName) {
    console.log(params);
    const { files, type, index } = params;
    if(tempPicName === 'license') {
      this.license = files;
    } else {
      this.shopPic = files;
    }
  }

  //点击图片的类型
  imageClick(params) {
    console.log(params);
  }

  //添加图片
  addImageClick(e,tempPicName) {
    //阻止时间传播，防止弹出对话框
    e.preventDefault();
    //当前上传的图片地点
    this.tempPicName = tempPicName;
    //手动调用带upload的对话框
    this.picture.nativeElement.click();
  }

  ngOnInit() {
    //获取参数source值
    this.activedRoute.queryParams.subscribe(
      (params:any) => {
        this.source = params['source']
      }
    );
    //注册添加文件之后的回调
    this.uploader.onAfterAddingFile = (fileItem)=>this.onAfterAddingFile(fileItem);
    //注册上传文件失败的回调
    this.uploader.onWhenAddingFileFailed = (item,filter,options)=>this.onWhenAddingFileFailed(item,filter,options);
    //注册上传一个文件错误的回调
    this.uploader.onErrorItem = (item,response,status,headers)=> this.onErrorItem(item,response,status,headers);
    //注册上传一个文件成功的回调
    this.uploader.onSuccessItem = (item,response,status,headers)=>this.onSuccessItem(item,response,status,headers);
  }

  back() {
    this.router.navigate(['/home/shops']);
  }

  //提交申请
  apply() {
    if(!this.marketName) {
      const toast = Toast.fail('请填写店铺名称', 1000);
    }else if(!this.marketDetail) {
      const toast = Toast.fail('请填写店铺详情', 1000);
    }else if(!this.marketAddress) {
      const toast = Toast.fail('请填写店铺地址', 1000);
    }else if(!this.marketPhone) {
      const toast = Toast.fail('请填写店铺电话', 1000);
    }else if(this.license.length === 0) {
      const toast = Toast.fail('请上传营业执照', 1000);
    }else if(this.shopPic.length === 0) {
      const toast = Toast.fail('请上传门店照片', 1000);
    }else {
      let toast = Toast.loading('加载中......', 0);
      //营业执照
      let marketInfoPics = [];
      //门店照片
      let marketLocationPics = [];
      for(let item of this.license) {
        console.log(item);
        marketInfoPics.push({'imageUrl':item.url})
      }
      for(let item of this.shopPic) {
        console.log(item);
        marketLocationPics.push({'imageUrl':item.url})
      }
      let userId = JSON.parse(localStorage.getItem('user')).userId;
      let model = {
        marketName: this.marketName,
        marketAddress: this.marketAddress,
        marketDetail: this.marketDetail,
        marketPhone: this.marketPhone,
        marketInfoPics: marketInfoPics,
        marketLocationPics: marketLocationPics,
        userId: userId,
        isdelete: 0
      }
      console.log(model);
      this.httpClient.post('/market',model).subscribe((res:any)=>{
        if(res.status) {
          Toast.hide();
          let successToast = Toast.success('申请成功,请登录网页端查看!',1000);
        }else {
          Toast.hide();
          let errorToast = Toast.fail(res.value, 1000);
        }
      },(error:any)=>{
        let toast = Toast.fail('该名称店铺已注册,请重新输入!', 1000);
      });
    }
  }

  //图片处理回调函数
  //添加文件之后的回调
  onAfterAddingFile(fileItem: FileItem): any{
    let toast = Toast.loading('加载中......', 0);
  }
  //上传文件失败的回调
  onWhenAddingFileFailed(item: FileLikeObject, filter: any, options: any): any{
    Toast.hide();
    let toast = Toast.fail('上传失败，请上传20M以内的图片!', 1000);
  }
  //上传一个文件错误的回调
  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any{
    Toast.hide();
    let toast = Toast.fail('网络异常,请稍后再试!', 1000);
  }
  //上传一个文件成功的回调
  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any{
    Toast.hide();
    let jsonBack:any = JSON.parse(response);
    if(jsonBack.status){
      if(this.tempPicName === 'license'){
        this.license = this.license.concat({
          url: fileServer+jsonBack.value
        });
      }else{
        this.shopPic = this.shopPic.concat({
          url: fileServer+jsonBack.value
        });
      }
    }else{
      let toast = Toast.fail(jsonBack.value, 1000);
    }
  }
}
