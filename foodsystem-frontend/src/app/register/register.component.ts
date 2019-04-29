import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName:string;
  password:string;
  userSex:string;
  userAddress:string;
  userPhone:string;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  register() {
    let user = {
      "userName": this.userName,
      "password": this.password,
      "userSex": this.userSex,
      "userAddress" : this.userAddress,
      "userPhone": this.userPhone,
      "role": 0,
      "isdelete": 0
    }
    this.httpClient.post("/user/register",user).subscribe((res:any)=>{
      if(res.status) {
        alert("注册成功");
      }else{
        alert(res.value);
      }
    })
  }

}
