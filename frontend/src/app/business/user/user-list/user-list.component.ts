import { Component, OnInit,ViewChild} from '@angular/core';
import { AppService } from '../../../app.service';

import {HttpPaginationComponent} from '../../../shared/pagination/http-pagination.component';
import { HttpService } from '../../../shared/http/http.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';
import { ToastService } from '../../../shared/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'c-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit{
  userList: Array<any> = [];

  constructor(
     private appService: AppService,
     private toastService: ToastService, 
     private httpService: HttpService,
     private router: Router
     ) {
    this.appService.titleEventEmitter.emit("用户列表");
  }

  ngOnInit(): void {
    this.httpService.get("/user/alllist",null,(success,data,res)=>{
      if (data.status) {
        this.userList = data.value;
      }else {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
        this.toastService.toast(toastCfg);
      }
    },(success,msg,error)=>{
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      this.toastService.toast(toastCfg);
    })
  }

  editUser(user, index) {
    this.router.navigate(['/app/user/userEdit'],{queryParams:{ user: JSON.stringify(user)}});
  }

  deleteUser(user, index) {
    this.httpService.delete("/user/info",user,(success,data,res)=>{
      if (data.status) {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '用户删除成功!', 3000);
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