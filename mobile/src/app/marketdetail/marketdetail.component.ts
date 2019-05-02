import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Toast } from 'ng-zorro-antd-mobile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-marketdetail',
  templateUrl: './marketdetail.component.html',
  styleUrls: ['./marketdetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarketdetailComponent implements OnInit {

  orderStatus:boolean = false;
  user = JSON.parse(localStorage.getItem('user'));
  
  //店铺信息
  market:any;
  //多级菜单列表
  menu:Array<any> = [];
  //单级菜单列表
  simpleMenu:Array<any> = [];

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private toast: Toast
  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe((res:any)=>{
      this.market = JSON.parse(res.market);
      // let allCategory:Array<string> = this.market.products.map((product:any)=>{
      //   return product.category.categoryName
      // });
      // allCategory = Array.from(new Set(allCategory));
      // let index = 1;
      // for(let category of allCategory) {
      //   let model = {
      //     value: `${index}`,
      //     label: category,
      //     children: []
      //   };
      //   this.menu.push(model);
      //   index++;
      // }
      // this.market.products.forEach((product:any)=>{
      //   this.menu.forEach((item:any)=>{
      //     if(item.label === product.category.categoryName){
      //       let model = {
      //         label: product.productName,
      //         value: item.children.length+1+''
      //       };
      //       item.children.push(model);
      //     }
      //   });
      // });

      this.simpleMenu = this.market.products.map((product:any,index)=>{
        return {
          'value':{
            'productId': product.productId,
            'productPrice': product.productPrice
          },
          'label':product.productName
        }
      });
    });
  }

  //回退
  back() {
    this.router.navigate(['/home/shops']);
  }

  //点餐逻辑
  orderFood() {
    this.orderStatus = true;
  }

  //点餐
  menuHeight: number = document.documentElement.clientHeight * 0.6;

  onMaskClick() {
    this.orderStatus = false;
  }

  onOk(value:any) {
    let price = 0;
    value.forEach((val:any)=>{
      price += val.productPrice;
    });
    let result = confirm(`此笔订单一共需要到付${price}元,请确认!`);
    if(result) {
      const toast = Toast.loading('加载中......',0);
      let productList = value.map((val:any)=>{
        return {"productId":val.productId};
      })
      let model = {
        "isdelete": 0,
        "marketId": this.market.marketId,
        "orderdate": new Date(),
        "orderprice": price,
        "orderstatus": 0,
        "userId": this.user.userId,
        "productList": productList
      }
      this.httpClient.post('/order',model).subscribe((res:any)=>{
        Toast.hide();
        if(res.status){
          const toast = Toast.success('恭喜您,下单成功!');
          this.onCancel();
        }else{
          const toast = Toast.fail('下单失败,请继续采购!');
        }
      });
    }else {
      const toast = Toast.fail('下单失败,请继续采购!');
    }
  }

  onCancel() {
    this.orderStatus = false;
  }
}
