import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import User from 'src/app/models/User';
import UserBuilder from 'src/app/models/User';
import { Credentials } from 'src/app/models/credentials';
import { StateTrackerService } from 'src/app/services/state-tracker.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {

  user!:User;
  router!: Router;
  activatedRoute: ActivatedRoute;

  constructor(private state:StateTrackerService, router:Router, _activatedRoute:ActivatedRoute){

   this.activatedRoute = _activatedRoute;


  }
  credentials:FormGroup = new FormGroup({

    username: new FormControl<string>('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl<string>('',[Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    }

  )
  confirmationPassword:string='';
  confirmation(event:any){

    this.confirmationPassword=event.target.value;


  }

  onClickSubmit(){
   this.user = new User(this.state);
  this.router.navigateByUrl('/login');
  }


}
