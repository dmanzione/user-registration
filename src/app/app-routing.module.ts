import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { AddressStepComponent } from './modules/address-step/address-step.component';
import { ContactInfoStepComponent } from './modules/contact-info-step/contact-info-step.component';
import { UserinfoComponent } from './modules/userinfo/userinfo.component';
import { ErrorpageComponent } from './modules/errorpage/errorpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'address',
    component: AddressStepComponent,
  },
  {
    path: 'contact',
    component: ContactInfoStepComponent,
  },
  {
    path: 'credentials',
    component: UserinfoComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
