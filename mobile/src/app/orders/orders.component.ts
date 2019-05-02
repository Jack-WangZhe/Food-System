import { Component, OnInit } from '@angular/core';
import { Toast } from 'ng-zorro-antd-mobile';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));

  //历史订单
  pendingOrders = [];
  completeOrders = [];

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private toast: Toast
  ) { }

  ngOnInit() {
    this.httpClient.get(`/order/user/open?userId=${this.user.userId}`).subscribe((res:any)=>{
      if(res.status){
        this.pendingOrders = res.value;
      }else{
        const toast = Toast.fail(res.value,1000);
      }
    });
    this.httpClient.get(`/order/user/closed?userId=${this.user.userId}`).subscribe((res:any)=>{
      if(res.status){
        this.completeOrders = res.value;
      }else{
        const toast = Toast.fail(res.value,1000);
      }
    })
  }

  //回退
  back() {
    this.router.navigate(['/home/shops']);
  }

  //订单详情
  clickOrder(order) {
    this.router.navigate(['/orderdetail'],{queryParams:{
      'order': JSON.stringify(order),
      'source': 'self'
    }})
  }
}
