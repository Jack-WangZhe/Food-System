import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { HttpService } from '../../../shared/http/http.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';
import { Router } from '@angular/router';
import { FileUploader, FileItem, FileLikeObject, ParsedResponseHeaders } from 'ng2-file-upload';

@Component({
  selector: 'c-product-add',
  templateUrl: './product-add.component.html'
})
export class ProductAddComponent implements OnInit{
  user = JSON.parse(localStorage.getItem('user'));
  market:any = {};
  categoryList:Array<any> = [];
  categoryId = 1;
  isdelete = 0;
  productDetail = '';
  productName = '';
  productPrice = 0;
  productPicUrl = '';

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

  constructor(
    private appService: AppService,
     private toastService: ToastService, 
     private httpService: HttpService,
     private router: Router
    ) {
    this.appService.titleEventEmitter.emit("添加菜品");
  }

  ngOnInit(): void {
    this.httpService.get('/category',null,(success,data,res)=>{
      if (data.status) {
        this.categoryList = data.value;
      }else {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
        this.toastService.toast(toastCfg);
      }
    },(success,msg,error)=>{
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      this.toastService.toast(toastCfg);
    });
    this.httpService.get(`/market/user?userId=${this.user.userId}`,null,(success,data,res)=>{
      if (data.status) {
        //设置market信息
        localStorage.setItem('market',JSON.stringify(data.value));
        this.market = data.value;
      }else {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
        this.toastService.toast(toastCfg);
      }
    },(success,msg,error)=>{
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      this.toastService.toast(toastCfg);
    });

    //注册添加文件之后的回调
    this.uploader.onAfterAddingFile = (fileItem)=>this.onAfterAddingFile(fileItem);
    //注册上传文件失败的回调
    this.uploader.onWhenAddingFileFailed = (item,filter,options)=>this.onWhenAddingFileFailed(item,filter,options);
    //注册上传一个文件错误的回调
    this.uploader.onErrorItem = (item,response,status,headers)=> this.onErrorItem(item,response,status,headers);
    //注册上传一个文件成功的回调
    this.uploader.onSuccessItem = (item,response,status,headers)=>this.onSuccessItem(item,response,status,headers);
  }

  //添加文件之后的回调
  onAfterAddingFile(fileItem: FileItem): any{}
  //上传文件失败的回调
  onWhenAddingFileFailed(item: FileLikeObject, filter: any, options: any): any{
    alert('上传失败，请上传20M以内的图片!');
  }
  //上传一个文件错误的回调
  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any{
    alert('网络异常,请稍后再试!');
  }
  //上传一个文件成功的回调
  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any{
    let jsonBack:any = JSON.parse(response);
    if(jsonBack.status){
      this.productPicUrl = jsonBack.value;
    }else{
      alert(jsonBack.errorMessage);
    }
  }

  register() {
    if(!this.productName){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入菜品名!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.productDetail){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入菜品详情!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.productPrice){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入菜品价格!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.productPicUrl){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请上传菜品图片!', 3000);
      this.toastService.toast(toastCfg);
    }else {
      let model = {
        "isdelete": 0,
        "categoryId": this.categoryId,
        "marketId": this.market.marketId,
        "productDetail": this.productDetail,
        "productName": this.productName,
        "productPics": [
          {
            "imageUrl": 'http://localhost:9999/'+this.productPicUrl,
          }
        ],
        "productPrice": this.productPrice
      }
      this.httpService.post("/product", model, (successful, data, res)=>{
        if (data.status) {
          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', "添加菜品成功!", 3000);
          this.toastService.toast(toastCfg);
        }else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
          this.toastService.toast(toastCfg);
        }
      }, (successful, msg, err) => {
         const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
         this.toastService.toast(toastCfg);
      });
    }
  }
}