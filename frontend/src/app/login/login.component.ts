import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { HttpService } from '../shared/http/http.service';

import { ToastService } from '../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../shared/toast/toast-model';
import { CustomValidators } from '../shared/custom-validator/custom-validator';
import { UserBusinessService} from '../business-service/user/user-business.service';
import { Utils } from "../shared/util/utils";




@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router, 
    private toastService: ToastService, 
    private httpService: HttpService,
    private userBusinessService:UserBusinessService,
    private formBuilder: FormBuilder) {
    let userNameFc = new FormControl('', Validators.compose([Validators.required]));
    let passwordFc = new FormControl('', Validators.compose([Validators.required]));
    this.loginForm = this.formBuilder.group({
      userName: userNameFc,
      password: passwordFc
    });
  }

  /**
  * 初始化
  */
  ngOnInit() {

  }


  /**
   * 登录
   */
  login() {
    if (this.loginForm.valid) {
      let that = this;
      this.httpService.get(this.userBusinessService.login(), {
        username:  this.loginForm.controls['userName'].value,
        password:  this.loginForm.controls['password'].value
      }, function (successful, data, res) {
        if (data.status) {
          //将user信息存储到localstorage中
          localStorage.clear();
          localStorage.setItem("user",JSON.stringify(data.value));

          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', "登陆成功!", 3000);
          that.toastService.toast(toastCfg);
          that.router.navigate(['/app/home']);
        }else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
          that.toastService.toast(toastCfg);
        }
      }, function (successful, msg, err) {
         const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
         that.toastService.toast(toastCfg);
      });
    }
  }
}