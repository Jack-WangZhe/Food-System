import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.scss']
})
export class SelfComponent implements OnInit {

  user:any = JSON.parse(localStorage.getItem('user'));

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  //进入用户个人信息页面
  toUserDetail() {
    this.router.navigate(['/userdetail']);
  }

  //进入修改密码页面
  toChangePassword() {
    this.router.navigate(['/changepass']);
  }

  //进入我的订单页面
  toOrder() {
    this.router.navigate(['/myorders']);
  }

  //进入我的评价页面
  toEvaluate() {
    this.router.navigate(['/myevaluates']);
  }

  //进入申请加盟页面
  toApply() {
    this.router.navigate(['/apply'],{queryParams:{'source':'self'}})
  }

  //退出登录
  logout() {
    let status = confirm('你确定要退出吗?');
    if(status) {
      //清空localstorage
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }

}
