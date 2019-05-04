import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { PaginationModule}       from '../../shared/pagination/pagination.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderInfoComponent } from './order-info/order-info.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule,
    PaginationModule,
    FormsModule
  ],
  declarations: [
    OrderComponent,
    OrderAddComponent,
    OrderListComponent,
    OrderInfoComponent
  ],
  exports: [
  ],
  providers: []
})
export class OrderModule { }
