import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


const productRoutes: Routes = [
    {
        path: '', component: ProductComponent,
        children: [
            {
                path:'productAdd',
                component:ProductAddComponent
            },
            {
                path:'productList',
                component:ProductListComponent
            },
            {
                path:'productInfo',
                component:ProductInfoComponent
            },
            {
                path:'productEdit',
                component:ProductEditComponent
            }
        ]
    }
]


@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }