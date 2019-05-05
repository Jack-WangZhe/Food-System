import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { HttpService } from '../../../shared/http/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';

@Component({
  selector: 'c-order-info',
  templateUrl: './order-info.component.html'
})
export class OrderInfoComponent {

  //订单信息
  order:any;

  constructor(
    private appService: AppService,
    private toastService: ToastService, 
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.appService.titleEventEmitter.emit("订单详情");
    this.order = JSON.parse(this.activatedRoute.snapshot.queryParams['order']);
    console.log(this.order);
  }

  //回退
  back() {
    this.router.navigate(['/app/order/orderList']);
  }

  //完成订单
  finish() {
    this.order.orderstatus = 1;
    this.httpService.put("/order", this.order, (successful, data, res)=>{
      if (data.status) {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', "恭喜您，订单已完成!", 3000);
        this.toastService.toast(toastCfg);
        this.router.navigate(['/app/order/orderList']);
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