import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { HttpService } from '../../../shared/http/http.service';
import { Router } from '@angular/router';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';

@Component({
  selector: 'c-market-info',
  templateUrl: './market-info.component.html'
})
export class MarketInfoComponent implements OnInit{

  //用户信息
  user = JSON.parse(localStorage.getItem('user'));

  //店铺信息
  market:any={};

  constructor(
    private appService: AppService,
    private toastService: ToastService, 
    private httpService: HttpService,
    private router: Router
    ) {
    this.appService.titleEventEmitter.emit("店铺资料");
  }

  ngOnInit(): void {
    this.httpService.get(`/market/user?userId=${this.user.userId}`,null,(success,data,res)=>{
      if (data.status) {
        this.market = data.value;
      }else {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
        this.toastService.toast(toastCfg);
      }
    },(success,msg,error)=>{
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      this.toastService.toast(toastCfg);
    })
  }

}