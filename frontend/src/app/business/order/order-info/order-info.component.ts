import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { HttpService } from '../../../shared/http/http.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  }

  //回退
  back() {
    this.router.navigate(['/app/order/orderList']);
  }
}