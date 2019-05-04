import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { PaginationModule}       from '../../shared/pagination/pagination.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    PaginationModule,
    FormsModule,
    FileUploadModule
  ],
  declarations: [
    ProductComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductInfoComponent,
    ProductEditComponent
  ],
  exports: [
  ],
  providers: []
})
export class ProductModule { }
