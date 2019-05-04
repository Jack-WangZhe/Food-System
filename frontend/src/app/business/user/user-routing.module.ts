import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent} from './user-info/user-info.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const userRoutes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            {
                path:'userAdd',
                component:UserAddComponent
            },
            {
                path:'userList',
                component:UserListComponent
            },
            {
                path:'userInfo',
                component:UserInfoComponent
            },
            {
                path:'userEdit',
                component:UserEditComponent
            }
        ]
    }
]


@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }