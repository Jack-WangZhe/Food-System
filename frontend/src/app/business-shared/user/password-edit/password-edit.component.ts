import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastService } from '../../../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../../../shared/toast/toast-model';
import { CustomValidators } from '../../../shared/custom-validator/custom-validator'
import { HttpService } from '../../../shared/http/http.service';

/**
 * 修改密码组件
 */
@Component({
    selector: 'c-password-edit',
    templateUrl: './password-edit.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PasswordEditComponent {

    //用户信息
    user = JSON.parse(localStorage.getItem('user'));

    passwordEditForm: FormGroup;

    constructor(
        public activeModal: NgbActiveModal, 
        private toastService: ToastService,
        private formBuilder: FormBuilder,
        private httpService: HttpService
        ) {
        let oldPasswordFc = new FormControl('', Validators.compose([Validators.required]));
        let passwordFc = new FormControl('', Validators.compose([Validators.required]));
        let certainPasswordFc  = new FormControl('',CustomValidators.equalTo(passwordFc));

        this.passwordEditForm=this.formBuilder.group({
            oldPassword:oldPasswordFc,
            password:passwordFc,
            certainPassword:certainPasswordFc
        });
    }

    /**
     * 上传
     */
    ok(): void {
        if(this.passwordEditForm.valid){
            this.user.password = this.passwordEditForm.value.password;
            this.httpService.put("/user/info", this.user, (successful, data, res)=>{
                if (data.status) {
                    //将user信息更新到localstorage中
                    localStorage.setItem("user",JSON.stringify(this.user));
                    const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '修改密码成功!', 2000);
                    this.toastService.toast(toastCfg);
                    this.close();
                }else {
                    const toastCfg = new ToastConfig(ToastType.ERROR, '', data.value, 3000);
                    this.toastService.toast(toastCfg);
                }
            }, (successful, msg, err)=>{
                const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
                this.toastService.toast(toastCfg);
            });
        }
    }

    /**
       * 关闭
       */
    close(): void {
        this.activeModal.dismiss({ status: 'closed' });
    }


}
