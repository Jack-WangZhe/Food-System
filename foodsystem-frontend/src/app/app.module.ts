import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { ProductMagComponent } from './product-mag/product-mag.component';
import { SellerMagComponent } from './seller-mag/seller-mag.component';
import { OrderMagComponent } from './order-mag/order-mag.component';
import { ProductMagListComponent } from './product-mag-list/product-mag-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

// 声明路由配置
const routeConfig: Routes = [
  {path:'home',component:HomeComponent},
  {path:'productmag',component:ProductMagComponent,
    children:[
      {path:'productmaglist',component:ProductMagListComponent}
    ]
  },
  {path:'sellermag',component:SellerMagComponent},
  {path:'ordermag',component:OrderMagComponent},
  {path:'product/:id',component:ProductDetailComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    ProductMagComponent,
    SellerMagComponent,
    OrderMagComponent,
    ProductMagListComponent,
    LoginComponent,
    RegisterComponent
  ],
// 注入路由配置
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
