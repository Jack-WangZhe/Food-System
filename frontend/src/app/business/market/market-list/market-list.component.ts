import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../../app.service';

import {HttpPaginationComponent} from '../../../shared/pagination/http-pagination.component';
import { HttpService } from '../../../shared/http/http.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';
import { ToastService } from '../../../shared/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'c-market-list',
  templateUrl: './market-list.component.html'
})
export class MarketListComponent implements OnInit{
  marketList: Array<any> = [];

  constructor(
     private appService: AppService,
     private toastService: ToastService, 
     private httpService: HttpService,
     private router: Router
     ) {
    this.appService.titleEventEmitter.emit("店铺列表");
  }

  ngOnInit(): void {
    this.httpService.get("/market/all",null,(success,data,res)=>{
      if (data.status) {
        this.marketList = data.value;
      }else {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
        this.toastService.toast(toastCfg);
      }
    },(success,msg,error)=>{
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      this.toastService.toast(toastCfg);
    })
  }

  editMarket(market, index) {
    this.router.navigate(['/app/market/marketEdit'],{queryParams:{ market: JSON.stringify(market)}});
  }

  deleteMarket(market, index) {
    this.httpService.delete(`/market/${market.marketId}`,null,(success,data,res)=>{
      if (data.status) {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '店铺删除成功!', 3000);
        this.toastService.toast(toastCfg);
        this.ngOnInit();
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