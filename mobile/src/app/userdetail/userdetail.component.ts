import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'ng-zorro-antd-mobile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  user:any = JSON.parse(localStorage.getItem('user'));
  username:string=this.user.userName;
  useraddress:string=this.user.userAddress;
  userphone:string=this.user.userPhone;
  usersex:number=this.user.userSex;

  constructor(
    private router: Router,
    private toast: Toast,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
  }

  //回退
  back() {
    this.router.navigate(['/home/shops']);
  }

  //修改个人信息
  resetUserInfo() {
    if(!this.useraddress) {
      const toast = Toast.fail('请填写地址栏!',1000);
    }else if(!this.userphone) {
      const toast = Toast.fail('请填写手机栏!',1000);
    }else {
      const toast = Toast.loading('加载中......',0);
      this.user.userAddress = this.useraddress;
      this.user.userPhone = this.userphone;
      this.httpClient.put('/user/info',this.user).subscribe((res:any)=>{
        Toast.hide();
        if(res.status){
          const toast = Toast.success('信息修改成功!',1000);
          localStorage.setItem('user',JSON.stringify(this.user));
          this.router.navigate(['/home/shops']);
        }else{
          const toast = Toast.fail(res.value,1000);
        }
      })
    }
  }
}
