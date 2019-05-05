import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderdetailComponent implements OnInit {

  //来源
  source = '';
  //订单
  order:any={};
  //订单的商铺
  market:any={};
  //评价信息
  evaluteInfo = '';
  //用户信息
  user = JSON.parse(localStorage.getItem('user'));

  //订单进度
  steps = [
    {
      title: '提交订单',
      description: 'Submit Order'
    },
    {
      title: '订单进行中',
      description: 'Inprogress Order'
    },
    {
      title: '完成订单',
      description: 'Complete Order'
    }
  ];

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private toast: Toast
  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe((param:any)=>{
      this.source = param.source;
      this.order = JSON.parse(param.order);
      this.httpClient.get(`/market/${this.order.marketId}`).subscribe((res:any)=>{
        if(res.status){
          this.market = res.value;
        }else{
          const toast = Toast.fail(res.value, 1000);
        }
      });
    });
  }

  //回退
  back() {
    if(this.source === 'self') {
      this.router.navigate(['/myorders']);
    }else {
      this.router.navigate(['/home/shops']);
    }
  }

  //提交评价
  sendEvaluate() {
    const toast = Toast.loading('加载中......',0);
    let model = {
      "evaluateDetail": this.evaluteInfo,
      "isdelete": 0,
      "orderId": this.order.orderId,
      "userId": this.user.userId
    }
    this.httpClient.post('/evaluate',model).subscribe((res:any)=>{
      Toast.hide();
      if(res.status){
        const toast = Toast.success('评价成功!',1000);
        this.back();
      }else{
        const toast = Toast.fail(res.value,1000);
      }
    })
  }
}
