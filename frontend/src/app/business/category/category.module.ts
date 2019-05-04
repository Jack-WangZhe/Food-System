import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { PaginationModule}       from '../../shared/pagination/pagination.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule,
    PaginationModule,
    FormsModule
  ],
  declarations: [
    CategoryComponent,
    CategoryAddComponent,
    CategoryListComponent
  ],
  exports: [
  ],
  providers: []
})
export class CategoryModule { }
