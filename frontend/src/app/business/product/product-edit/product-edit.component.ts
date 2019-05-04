import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared/http/http.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';

@Component({
  selector: 'c-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit{
  categoryList = [];
  ngOnInit(): void {
    this.httpService.get('/category',null,(success,data,res)=>{
      if (data.status) {
        this.categoryList = data.value;
      }else {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
        this.toastService.toast(toastCfg);
      }
    },(success,msg,error)=>{
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      this.toastService.toast(toastCfg);
    });
  }

  //菜品信息
  product:any;

  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private appService: AppService,
    private httpService: HttpService,
    private toastService: ToastService
    ) {
    this.appService.titleEventEmitter.emit("编辑菜品");
    this.product = JSON.parse(this.activatedRoute.snapshot.queryParams['product']);
  }

  //回退
  back() {
    this.router.navigate(['/app/product/productList']);
  }

  //编辑用户
  edit() {
    if(!this.product.productName){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入菜品名!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.product.productDetail){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入菜品详情!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.product.productPrice){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入菜品价格!', 3000);
      this.toastService.toast(toastCfg);
    }else {
      this.httpService.put("/product", this.product, (successful, data, res)=>{
        if (data.status) {
          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', "菜品信息修改成功!", 3000);
          this.toastService.toast(toastCfg);
        }else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
          this.toastService.toast(toastCfg);
        }
      }, (successful, msg, err) => {
         const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
         this.toastService.toast(toastCfg);
      });
    }
  }
}