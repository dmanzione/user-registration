import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { StateTrackerService } from './services/state-tracker.service';
import { UserinfoComponent } from './modules/userinfo/userinfo.component';
import { AddressStepComponent } from './modules/address-step/address-step.component';
import { LoginComponent } from './modules/login/login.component';
import { UserinfoModule } from './modules/userinfo/userinfo.module';
import { RegistrationModule } from './modules/registration/registration.module';

import { LoginModule } from './modules/login/login.module';
import { HomeModule } from './modules/home/home.module';
import { AddressStepModule } from './modules/address-step/address-step.module';
import { ContactInfoStepComponent } from './modules/contact-info-step/contact-info-step.component';
import { ContactInfoStepModule } from './modules/contact-info-step/contact-info-step.module';
import { CommonModule } from '@angular/common';
import { ErrorpageComponent } from './modules/errorpage/errorpage.component';
import { ErrorpageModule } from './modules/errorpage/errorpage.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterLink,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserinfoModule,
    RegistrationModule,


    LoginModule,
    HomeModule,
    AddressStepModule,
    ContactInfoStepModule,

  ],
  exports: [
    RouterModule
  ],
  providers: [StateTrackerService],

  bootstrap: [AppComponent],

})
export class AppModule {}
