import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressStepComponent } from './address-step.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatAnchor, MatButtonModule, MatFabAnchor } from '@angular/material/button';
import { MatCommonModule, MatLineModule, MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    RouterLink,
    MatButtonModule,
    MatButtonModule,
    MatCommonModule,
  MatNativeDateModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatLineModule,
  MatOptionModule


  ],
  declarations: [AddressStepComponent],
})
export class AddressStepModule {}
