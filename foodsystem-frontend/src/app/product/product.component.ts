import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 2.将页面上展示的商品信息的数据存储在数组中
  private products:Array<Product>;
  private imgUrl='http://placehold.it/320*150';


  constructor() { }

  ngOnInit() {
    // 3.初始化这个数组(只调用一次)
    this.products = [
      new Product(1,"第一个商品名称",1.99,1.5,"这是第1个商品创建的",["电子产品","硬件设备"]),
      new Product(2,"第二个商品名称",2.99,2.5,"这是第2个商品创建的",["电子产品"]),
      new Product(3,"第三个商品名称",3.99,3.5,"这是第3个商品创建的",[,"硬件设备"]),
      new Product(4,"第四个商品名称",4.99,4.5,"这是第4个商品创建的",["电子产品","硬件设备"]),
      new Product(5,"第五个商品名称",5.99,4.5,"这是第5个商品创建的",["硬件设备"]),
      new Product(6,"第六个商品名称",6.99,4.5,"这是第6个商品创建的",["电子产品"]),
    ]
    
  }

}
// 1.需要一个对象来封装产品信息
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){
  }
}
