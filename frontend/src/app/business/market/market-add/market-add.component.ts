import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { HttpService } from '../../../shared/http/http.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';

@Component({
  selector: 'c-market-add',
  templateUrl: './market-add.component.html'
})
export class MarketAddComponent {

  userName = '';//用户名
  password = '';//密码
  role = 0;//权限
  userAddress = '';//地址
  userPhone = '';//用户手机号
  userSex = 0;//性别

  constructor(
    private appService: AppService,
    private toastService: ToastService, 
    private httpService: HttpService
    ) {
    this.appService.titleEventEmitter.emit("添加用户");
  }

  register() {
    if(!this.userName){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入用户名!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.password){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入密码!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.userPhone){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入手机号!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.userAddress){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入地址!', 3000);
      this.toastService.toast(toastCfg);
    }else {
      let model = {
        "isdelete": 0,
        "password": this.password,
        "role": this.role,
        "userAddress": this.userAddress,
        "userName": this.userName,
        "userPhone": this.userPhone,
        "userSex": this.userSex
      }
      this.httpService.post("/user/register", model, (successful, data, res)=>{
        if (data.status) {
          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', "注册用户成功!", 3000);
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

  changeSex(event) {
    this.userSex = +event.srcElement.value;
  }

  changeRole(event) {
    this.role = +event.srcElement.value;
  }
}