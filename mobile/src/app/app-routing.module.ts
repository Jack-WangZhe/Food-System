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
        {path:'orders',component:OrdersComponent},
        {path:'self',component:SelfComponent}
      ]
    },
    { path:'apply',component:ApplyComponent }
  ] 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
