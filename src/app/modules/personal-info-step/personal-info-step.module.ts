import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoStepComponent } from './personal-info-step.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    PersonalInfoStepComponent
  ],
  imports: [
    CommonModule,
     BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    PersonalInfoStepComponent
  ]
})
export class PersonalInfoStepModule { }
