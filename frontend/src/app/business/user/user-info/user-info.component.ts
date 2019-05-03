import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'c-user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent {

  //用户信息
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("个人资料");
  }
}