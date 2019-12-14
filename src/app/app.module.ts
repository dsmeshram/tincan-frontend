import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
//http client
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import {ConfigService}  from './config/config.service'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppregistrationComponent } from './components/dashboard/appregistration/appregistration.component';
import { AppdashboardComponent } from './components/dashboard/appdashboard/appdashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ToastmessageComponent } from './components/dashboard/appdashboard/toastmessage/toastmessage.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DeletedialogComponent } from './components/dashboard/appdashboard/deletedialog/deletedialog.component';
import { NoappsComponent } from './components/dashboard/appdashboard/noapps/noapps.component';
import { AppdoverviewComponent } from './components/dashboard/appdashboard/appdoverview/appdoverview.component';
import { AppinformationComponent } from './components/dashboard/appdashboard/appinformation/appinformation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppregistrationComponent,
    AppdashboardComponent,
    ToastmessageComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    DeletedialogComponent,
    NoappsComponent,
    AppdoverviewComponent,
    AppinformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({
      radius: 35,
      outerStrokeWidth: 8,
      innerStrokeWidth: 4,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  entryComponents: [AppregistrationComponent,
    ToastmessageComponent,
    DeletedialogComponent,
    AppinformationComponent],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
