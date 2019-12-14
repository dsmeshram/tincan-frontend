import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppdashboardComponent } from './components/dashboard/appdashboard/appdashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { NoappsComponent } from './components/dashboard/appdashboard/noapps/noapps.component';
import { AppdoverviewComponent } from './components/dashboard/appdashboard/appdoverview/appdoverview.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, {
    path: 'login',
    component: LoginComponent
  },{
    path: 'apphome',
    component: AppdashboardComponent,
    children :[
    {
        path : 'noapp',
        component : NoappsComponent
    },{
      path: 'appoverview',
      component : AppdoverviewComponent
    }
    ]
  },{
    path : 'register',
    component : RegistrationComponent
  },{
    path : 'forgot',
    component : ForgotpasswordComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
