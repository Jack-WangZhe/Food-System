import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { HttpService } from '../../../shared/http/http.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';

@Component({
  selector: 'c-category-add',
  templateUrl: './category-add.component.html'
})
export class CategoryAddComponent {

  categoryName = '';//菜系名

  constructor(
    private appService: AppService,
    private toastService: ToastService, 
    private httpService: HttpService
    ) {
    this.appService.titleEventEmitter.emit("添加菜系");
  }

  register() {
    if(!this.categoryName){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入菜系名!', 3000);
      this.toastService.toast(toastCfg);
    }else {
      let model = {
        "isdelete": 0,
        "categoryName": this.categoryName
      }
      this.httpService.post("/category", model, (successful, data, res)=>{
        if (data.status) {
          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', "添加菜系成功!", 3000);
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