import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  markets:Array<any> = [];

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private toast: Toast
  ) {}

  ngOnInit() {
    this.httpClient.get('/market/all').subscribe((res:any)=>{
      if(res.status) {
        this.markets = res.value;
      }else {
        const toast = Toast.fail('暂时没有商家入驻...',1000);
      }
    },(error:any)=>{
      //此处不做任何处理,一直加载...
    })
  }

  data = [
    {icon:"/assets/images/join.svg",text:'申请加盟'},
    {icon:'/assets/images/evaluate.svg',text:'评价历史'},
    {icon:'/assets/images/selfinfo.svg',text:'个人信息'}
  ]

  clickItem(event) {
    if(event.index === 0){
      this.router.navigate(['/apply'],{queryParams:{'source':'shops'}})
      console.log('申请加盟店铺');
    }else if(event.index === 1){
      this.router.navigate(['/myevaluates']);
      console.log('评价历史')
    }else {
      this.router.navigate(['/userdetail']);
      console.log('个人信息')
    }
  }

  //点击每一个market
  clickMarket(market) {
    this.router.navigate(['/marketdetail'],{queryParams:{'market':JSON.stringify(market)}});
    console.log(market);
  }

}
