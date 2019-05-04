import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared/http/http.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';

@Component({
  selector: 'c-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent {

  //用户信息
  user:any;

  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private appService: AppService,
    private httpService: HttpService,
    private toastService: ToastService
    ) {
    this.appService.titleEventEmitter.emit("编辑资料");
    this.user = JSON.parse(this.activatedRoute.snapshot.queryParams['user']);
  }

  //回退
  back() {
    this.router.navigate(['/app/user/userList']);
  }

  //编辑用户
  edit() {
    if(!this.user.userName){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入用户名!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.user.password){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入密码!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.user.userPhone){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入手机号!', 3000);
      this.toastService.toast(toastCfg);
    }else if(!this.user.userAddress){
      const toastCfg = new ToastConfig(ToastType.ERROR, '', '请输入地址!', 3000);
      this.toastService.toast(toastCfg);
    }else {
      this.httpService.put("/user/info", this.user, (successful, data, res)=>{
        if (data.status) {
          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', "编辑用户成功!", 3000);
          this.toastService.toast(toastCfg);
          this.router.navigate(['/app/user/userList']);
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