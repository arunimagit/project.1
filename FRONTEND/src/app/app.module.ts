import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { SignupComponent } from './signup/signup.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { UserService } from './user.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentloginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService,AuthGuard,UserService,
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
