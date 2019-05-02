import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './shops/shops.component';
import { OrdersComponent } from './orders/orders.component';
import { SelfComponent } from './self/self.component';
import { ApplyComponent } from './apply/apply.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { EvaluatesComponent } from './evaluates/evaluates.component';
import { MarketdetailComponent } from './marketdetail/marketdetail.component';
import { HistoryorderComponent } from './historyorder/historyorder.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';

const routes: Routes = [{
  path:'', component:AppComponent,
  children:[
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    { 
      path:'home', 
      component:HomeComponent,
      children: [
        {
          path:'shops',
          component:ShopsComponent
        },
        {path:'orders',component:HistoryorderComponent},
        {path:'self',component:SelfComponent}
      ]
    },
    { path:'apply',component:ApplyComponent },
    { path:'marketdetail',component:MarketdetailComponent },
    { path:'userdetail',component: UserdetailComponent},
    { path:'changepass',component: ChangepassComponent},
    { path:'myorders',component: OrdersComponent},
    { path:'myevaluates',component: EvaluatesComponent},
    { path:'orderdetail',component: OrderdetailComponent}
  ] 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
