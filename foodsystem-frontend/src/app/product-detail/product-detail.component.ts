import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // 声明商品标题
  productTitle:string;

  // 接受外面路由传进来的参数，注入activateroute
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // 标题放入url传入
    this.productTitle=this.routeInfo.snapshot.params["id"]
    console.log(this.productTitle);
  }

}
