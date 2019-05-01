import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';

  constructor(
    private router: Router,
    private httpClient:HttpClient,
    private toast: Toast
  ) { }

  ngOnInit() {
  }

  login() {
    if(!(this.username && this.password)) {
      const toast = Toast.fail('请输入用户名和密码!', 1000);
    }else{
      let toast = Toast.loading('加载中......', 0);
      this.httpClient.get(`/user/login?username=${this.username}&&password=${this.password}`).subscribe((res:any)=>{
        Toast.hide();
        if(res.status) {
          const toast = Toast.success('登录成功!', 1000);
          //登录成功后将用户信息存储到localstorage中
          localStorage.setItem('user',JSON.stringify(res.value));
          this.router.navigate(['/home']);
        }else{
          const toast = Toast.fail(res.value, 1000);
        }
      },(error:any)=>{
        console.log("出现错误,请稍后再试...");
        Toast.hide();
      })
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

  changeUsername(username) {
    this.username = username;
  }

  changePassword(password) {
    this.password = password;
  }

}
