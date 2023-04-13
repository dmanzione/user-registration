import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoStepComponent } from './contact-info-step.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeModule } from '../home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressStepModule } from '../address-step/address-step.module';
import { LoginModule } from '../login/login.module';
import { PersonalInfoStepModule } from '../personal-info-step/personal-info-step.module';
import { RegistrationModule } from '../registration/registration.module';
import { UserinfoModule } from '../userinfo/userinfo.module';



@NgModule({
  declarations: [ContactInfoStepComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    RouterLink
  ],
})
export class ContactInfoStepModule {}
