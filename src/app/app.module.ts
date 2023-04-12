import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

  import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

import {MatListModule} from '@angular/material/list';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { StateTrackerService } from './services/state-tracker.service';

  

@NgModule({

  declarations: [

    AppComponent

  ],

  imports: [

    BrowserModule,

    BrowserAnimationsModule,
    HttpClientModule,
    RouterLink,
    AppRoutingModule,

   
    FormsModule,

    ReactiveFormsModule,

    MatInputModule,

    MatButtonModule,

    MatListModule

  ],
  exports:[MatButtonModule,MatInputModule,MatListModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,BrowserModule,AppRoutingModule,RouterLink],
  providers: [StateTrackerService],

  bootstrap: [AppComponent]

})

export class AppModule { }
