import { Component, OnInit } from '@angular/core';
import { Toast } from 'ng-zorro-antd-mobile';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {

  oldpassword:string='';
  newpassword:string='';
  newpassword_twice:string='';

  user = JSON.parse(localStorage.getItem('user'));

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private toast: Toast
  ) { }

  ngOnInit() {
  }

  //回退
  back() {
    this.router.navigate(['/home/shops']);
  }

  //确认修改密码
  resetPassword() {
    if(!this.oldpassword) {
      const toast = Toast.fail('请输入旧密码!',1000);
    }else if(!this.newpassword) {
      const toast = Toast.fail('请输入新密码!',1000);
    }else if(this.newpassword !== this.newpassword_twice) {
      const toast = Toast.fail('请输入与新密码相同的确认密码!',1000);
    }else if(this.oldpassword !== this.user.password) {
      const toast = Toast.fail('请输入正确的旧密码!',1000);
    }else if(this.oldpassword === this.user.newpassword) {
      const toast = Toast.fail('新旧密码输入一致!',1000);
    }else {
      const toast = Toast.loading('加载中......',0);
      this.user.password = this.newpassword;
      this.httpClient.put('/user/info',this.user).subscribe((res:any)=>{
        Toast.hide();
        if(res.status){
          const toast = Toast.success('密码修改成功,请重新登录!',1000);
          this.router.navigate(['/login']);
        }else{
          const toast = Toast.fail(res.value,1000);
        }
      },(error:any)=>{})
    }
  }

}
