import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-evaluates',
  templateUrl: './evaluates.component.html',
  styleUrls: ['./evaluates.component.scss']
})
export class EvaluatesComponent implements OnInit {

  //评价列表
  evaluates:Array<any> = [];
  //用户
  user = JSON.parse(localStorage.getItem('user'));

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private toast: Toast
  ) { }

  ngOnInit() {
    this.httpClient.get(`/evaluate/user?userId=${this.user.userId}`).subscribe((res:any)=>{
      if(res.status){
        this.evaluates = res.value;
        this.evaluates.forEach((evaluate:any)=>{
          this.httpClient.get(`/order?orderId=${evaluate.orderId}`).subscribe((res:any)=>{
            if(res.status){
              evaluate.order = res.value;
              this.httpClient.get(`/market/${evaluate.order.marketId}`).subscribe((res:any)=>{
                if(res.status){
                  evaluate.market = res.value;
                  console.log(evaluate);
                }else{
                  const toast = Toast.fail(res.value,1000);
                }
              })
            }else{
              const toast = Toast.fail(res.value,1000);
            }
          });
        })
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
      'source': 'home'
    }})
  }

}
