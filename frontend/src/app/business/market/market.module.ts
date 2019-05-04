import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { PaginationModule}       from '../../shared/pagination/pagination.module';
import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market.component';
import { MarketAddComponent } from './market-add/market-add.component';
import { MarketListComponent } from './market-list/market-list.component';
import { MarketInfoComponent } from './market-info/market-info.component';
import { MarketEditComponent } from './market-edit/market-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarketRoutingModule,
    PaginationModule,
    FormsModule
  ],
  declarations: [
    MarketComponent,
    MarketAddComponent,
    MarketListComponent,
    MarketInfoComponent,
    MarketEditComponent
  ],
  exports: [
  ],
  providers: []
})
export class MarketModule { }
