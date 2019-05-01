import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'ng-zorro-antd-mobile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username:string='';
  password:string='';
  password_twice:string='';
  useraddress:string='';
  userphone:string='';
  usersex:number=-1;

  constructor(
    private router: Router,
    private toast: Toast,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  register() {
    //校验输入的数据
    if(!this.username) {
      const toast = Toast.fail('请输入用户名!', 1000);
    }else if(!this.password) {
      const toast = Toast.fail('请输入密码!', 1000);
    }else if(this.password !== this.password_twice) {
      const toast = Toast.fail('确认密码需与密码一致!', 1000);
    }else if(!this.useraddress) {
      const toast = Toast.fail('请输入您的地址!', 1000);
    }else if(!this.userphone) {
      const toast = Toast.fail('请输入您的手机号!', 1000);
    }else if(this.usersex === -1) {
      const toast = Toast.fail('请选择您的性别!', 1000);
    }else {
      let toast = Toast.loading('加载中......', 0);
      let model = {
        "isdelete":0,
        "userName":this.username,
        "password":this.password,
        "role":0,
        "userPhone":this.userphone,
        "userAddress":this.useraddress,
        "userSex":this.usersex
      }
      //发送注册请求
      this.httpClient.post("/user/register",model).subscribe((res:any)=>{
        Toast.hide();
        if(res.status){
          //注册成功提示并跳转登录页面
          const toast = Toast.success('注册成功,请登录!', 1000);
          this.router.navigate(['/login']);
        }else{
          const toast = Toast.fail(res.value, 1000);
        }
      },(error:any)=>{
        Toast.hide();
        console.log(error);
      });
    }
  }

  login() {
    this.router.navigate(['/login']);
  }
}
