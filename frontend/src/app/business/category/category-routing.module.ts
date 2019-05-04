import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';


const categoryRoutes: Routes = [
    {
        path: '', component: CategoryComponent,
        children: [
            {
                path:'categoryAdd',
                component:CategoryAddComponent
            },
            {
                path:'categoryList',
                component:CategoryListComponent
            }
        ]
    }
]


@NgModule({
  imports: [
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryRoutingModule { }