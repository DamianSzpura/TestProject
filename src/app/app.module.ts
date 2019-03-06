import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { UserModule } from './modules/user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SecurityModule } from './modules/security/security.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TestInterceptor } from './helpers/test.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SecurityModule,
    UserModule,
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
