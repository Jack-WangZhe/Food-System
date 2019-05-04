import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared/http/http.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';

@Component({
  selector: 'c-market-edit',
  templateUrl: './market-edit.component.html'
})
export class MarketEditComponent {

  //用户信息
  market:any;

  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private appService: AppService,
    private httpService: HttpService,
    private toastService: ToastService
    ) {
    this.appService.titleEventEmitter.emit("编辑资料");
    this.market = JSON.parse(this.activatedRoute.snapshot.queryParams['market']);
  }

  //回退
  back() {
    this.router.navigate(['/app/market/marketList']);
  }

  //编辑用户
  edit() {
    if(!this.market.marketName){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入店名!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.market.marketAddress){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入地址!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.market.marketPhone){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入手机!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.market.marketDetail){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入详情!', 3000);
      this.toastService.toast(toastCfg);
    }else {
      this.httpService.put("/market", this.market, (successful, data, res)=>{
        if (data.status) {
          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', "编辑店铺成功!", 3000);
          this.toastService.toast(toastCfg);
          this.router.navigate(['/app/market/marketList']);
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