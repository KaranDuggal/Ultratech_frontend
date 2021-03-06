import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserModule} from "./modules/core/user/user.module"
import {Common_Module} from './modules/common/common.module'
import {HttpClientModule} from '@angular/common/http'
import {HeadInterceptor} from 'src/app/interceptor/head/head.interceptor'
// import {HTTP_INTERCEPTORS} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    UserModule,
    Common_Module,
    HttpClientModule,
    // HeadInterceptor,
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:HeadInterceptor,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
