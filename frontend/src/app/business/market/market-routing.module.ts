import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market.component';
import { MarketAddComponent } from './market-add/market-add.component';
import { MarketListComponent } from './market-list/market-list.component';
import { MarketEditComponent } from './market-edit/market-edit.component';
import { MarketInfoComponent } from './market-info/market-info.component';

const userRoutes: Routes = [
    {
        path: '', component: MarketComponent,
        children: [
            {
                path:'marketAdd',
                component:MarketAddComponent
            },
            {
                path:'marketList',
                component:MarketListComponent
            },
            {
                path:'marketInfo',
                component:MarketInfoComponent
            },
            {
                path:'marketEdit',
                component:MarketEditComponent
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
export class MarketRoutingModule { }