import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StateTrackerService } from 'src/app/services/state-tracker.service';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
     BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports:[
    RegistrationComponent
  ],
  providers:[]
})
export class RegistrationModule { }
