import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../../app.service';

import {HttpPaginationComponent} from '../../../shared/pagination/http-pagination.component';
import { HttpService } from '../../../shared/http/http.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';
import { ToastService } from '../../../shared/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'c-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit{
  orderList: Array<any> = [];
  user = JSON.parse(localStorage.getItem('user'));
  constructor(
     private appService: AppService,
     private toastService: ToastService, 
     private httpService: HttpService,
     private router: Router
     ) {
    this.appService.titleEventEmitter.emit("订单列表");
  }

  ngOnInit(): void {
    this.httpService.get(`/market/user?userId=${this.user.userId}`,null,(success,data,res)=>{
      if (data.status) {
        //设置market信息
        localStorage.setItem('market',JSON.stringify(data.value));
        this.httpService.get(`/order/${data.value.marketId}`,null,(success,data,res)=>{
          if (data.status) {
            this.orderList = data.value;
          }else {
            const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
            this.toastService.toast(toastCfg);
          }
        },(success,msg,error)=>{
          const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
          this.toastService.toast(toastCfg);
        })
      }else {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
        this.toastService.toast(toastCfg);
      }
    },(success,msg,error)=>{
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      this.toastService.toast(toastCfg);
    })
  }

  editOrder(order, index) {
    this.router.navigate(['/app/order/orderEdit'],{queryParams:{ order: JSON.stringify(order)}});
  }

  deleteOrder(order, index) {
    this.httpService.delete(`/order/${order.orderId}`,null,(success,data,res)=>{
      if (data.status) {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '订单删除成功!', 3000);
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