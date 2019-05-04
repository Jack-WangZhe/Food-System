import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderInfoComponent } from './order-info/order-info.component';

const orderRoutes: Routes = [
    {
        path: '', component: OrderComponent,
        children: [
            {
                path:'orderAdd',
                component:OrderAddComponent
            },
            {
                path:'orderList',
                component:OrderListComponent
            },
            {
                path:'orderEdit',
                component:OrderInfoComponent
            }
        ]
    }
]


@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderRoutingModule { }