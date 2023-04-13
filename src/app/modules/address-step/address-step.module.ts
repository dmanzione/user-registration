import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressStepComponent } from './address-step.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    RouterLink,
  ],
  declarations: [AddressStepComponent],
})
export class AddressStepModule {}
