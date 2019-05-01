import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdMobileModule, Toast } from 'ng-zorro-antd-mobile';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopsComponent } from './shops/shops.component';
import { OrdersComponent } from './orders/orders.component';
import { SelfComponent } from './self/self.component';
import { ApplyComponent } from './apply/apply.component';
import { FileUploadModule } from 'ng2-file-upload';
import { MarketdetailComponent } from './marketdetail/marketdetail.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { EvaluatesComponent } from './evaluates/evaluates.component';
import { HistoryorderComponent } from './historyorder/historyorder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShopsComponent,
    OrdersComponent,
    SelfComponent,
    ApplyComponent,
    MarketdetailComponent,
    UserdetailComponent,
    ChangepassComponent,
    EvaluatesComponent,
    HistoryorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdMobileModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FileUploadModule
  ],
  providers: [Toast],
  bootstrap: [AppComponent],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
