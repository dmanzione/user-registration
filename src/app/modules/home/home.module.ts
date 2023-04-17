import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [HomeComponent],
  imports: [

    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    RouterLink,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
})
export class HomeModule {}
