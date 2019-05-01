import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FileUploader, FileItem, FileLikeObject, ParsedResponseHeaders } from 'ng2-file-upload';
import { Toast } from 'ng-zorro-antd-mobile';
import { fileServer } from '../common/constants';
const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
  }
];

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  @ViewChild('picture')
  picture:ElementRef;
  
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

  files = data.slice(0);
  multiple = false;
  multipleTab = 0;

  fileChange(params) {
    console.log('----1----')
    console.log(params.files[params.files.length-1].url);
    // const { files, type, index } = params;
    // this.files = files;
  }

  imageClick(params) {
    console.log(params);
  }

  //添加图片
  addImageClick(e) {
    //阻止时间传播，防止弹出对话框
    e.preventDefault();
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
    if(this.source === 'shops') {
      this.router.navigate(['/home/shops']);
    }
  }

  //提交申请
  apply() {
    console.log('apply');
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
      this.files = this.files.concat({
        url: fileServer+jsonBack.value
      });
      console.log(this.files);
    }else{
      alert(jsonBack.errorMessage);
    }
  }
}
