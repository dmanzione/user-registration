import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserinfoComponent } from './userinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [UserinfoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports: [UserinfoComponent],
})
export class UserinfoModule {}
