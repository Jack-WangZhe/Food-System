import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import  { ModalService } from '../../shared/modal/modal.service';
import { TodoObjData, NeedReadObjData, NoticeObjData, CommonFuncData } from '../home/home-model';

import  { PasswordEditComponent} from '../../business-shared/user/password-edit/password-edit.component';


@Component({
  selector: 'c-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // 用户信息
  user = JSON.parse(localStorage.getItem('user'));

  /**
   * 初始化
   */
  ngOnInit() {

  }

  constructor(private modalService: ModalService,private ngbModalService: NgbModal){}


  /**
   * 修改密码
   */
  passwordEdit(){
      this.ngbModalService.open(PasswordEditComponent,{size:'lg'}).result.then((result) => {
        
      }, (reason) => {
        
      });
  }




}