import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-mag-list',
  templateUrl: './product-mag-list.component.html',
  styleUrls: ['./product-mag-list.component.css']
})
export class ProductMagListComponent implements OnInit {
  // 2.将页面上展示的列表信息的数据存储在数组中
  private productmaglists:Array<ProductMagList>;
  private imgUrl='';
  constructor() { }

  ngOnInit() {
    // 3.初始化这个数组(只调用一次)
    this.productmaglists = [
      new ProductMagList(1,"猪肉炖粉条",32,"这是第1个商品创建的",["东北菜"]),
      new ProductMagList(2,"大葱蘸大酱",25,"这是第2个商品创建的",["东北菜"]),
      new ProductMagList(3,"铁锅炖酸菜",39,"这是第3个商品创建的",[,"东北菜"]),
      new ProductMagList(4,"粗粮大饼子",5,"这是第4个商品创建的",["东北菜"]),
      new ProductMagList(5,"白菜炖豆腐",18,"这是第5个商品创建的",["东北菜"]),
      new ProductMagList(6,"青椒肉丝",23,"这是第6个商品创建的",["东北菜"]),
    ]
    
  }

}
//封装产品种类列表信息
export class ProductMagList{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string,
    public categories:Array<string>
  ){
  }
}
