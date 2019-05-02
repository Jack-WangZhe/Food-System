import { Component, OnInit } from '@angular/core';
import { Toast } from 'ng-zorro-antd-mobile';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historyorder',
  templateUrl: './historyorder.component.html',
  styleUrls: ['./historyorder.component.scss']
})
export class HistoryorderComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));

  //历史订单
  orders = [];

  constructor(
    private httpClient: HttpClient,
    private toast: Toast,
    private router: Router
  ) { }

  ngOnInit() {
    this.httpClient.get(`/order/user/all?userId=${this.user.userId}`).subscribe((res:any)=>{
      if(res.status){
        this.orders = res.value;
      }else{
        const toast = Toast.fail(res.value,1000);
      }
    })
  }

  //订单详情
  clickOrder(order) {
    this.router.navigate(['/orderdetail'],{queryParams:{
      'order': JSON.stringify(order),
      'source': 'home'
    }})
  }

}
