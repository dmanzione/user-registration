import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ErrorpageComponent } from './errorpage.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule

  ],
  exports:[]
})
export class ErrorpageModule { }
