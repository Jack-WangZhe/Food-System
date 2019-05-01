import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

/**
 * 定义所有服务接口
 */
@Injectable()
export class UserBusinessService {

  constructor() { }

  
  /**
   * 登录
   */
  login(){
    return "/user/login";
  }

 userInfo(){
    return "/app/user/userInfo";
  }

}
