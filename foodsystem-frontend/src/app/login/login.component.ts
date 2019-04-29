import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    
  }

  //用户登录
  login() {
    if(this.username && this.password) {
      //发送http请求到后台
      this.httpClient.get(`/user/login?username=${this.username}&&password=${this.password}`).subscribe((res:any)=>{
        if(res.status) {
          alert("成功");
        }else{
          alert(res.value);
        }
      });
    }else {
      alert("用户名或密码不能为空，请填写！")
    }

  }

}
