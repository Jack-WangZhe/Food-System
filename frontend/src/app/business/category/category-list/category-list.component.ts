import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../../app.service';

import {HttpPaginationComponent} from '../../../shared/pagination/http-pagination.component';
import { HttpService } from '../../../shared/http/http.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';
import { ToastService } from '../../../shared/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'c-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit{
  categoryList: Array<any> = [];

  constructor(
     private appService: AppService,
     private toastService: ToastService, 
     private httpService: HttpService,
     private router: Router
     ) {
    this.appService.titleEventEmitter.emit("菜系列表");
  }

  ngOnInit(): void {
    this.httpService.get("/category",null,(success,data,res)=>{
      if (data.status) {
        this.categoryList = data.value;
      }else {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
        this.toastService.toast(toastCfg);
      }
    },(success,msg,error)=>{
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      this.toastService.toast(toastCfg);
    })
  }

  deleteCategory(category, index) {
    this.httpService.delete(`/category/${category.categoryId}`,null,(success,data,res)=>{
      if (data.status) {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '菜系删除成功!', 3000);
        this.toastService.toast(toastCfg);
        this.ngOnInit();
      }else {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
        this.toastService.toast(toastCfg);
      }
    },(success,msg,error)=>{
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      this.toastService.toast(toastCfg);
    })
  }
}