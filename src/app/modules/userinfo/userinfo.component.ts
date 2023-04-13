import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  router: Router;
 
  constructor(private state:StateTrackerService, router:Router){
   
  }

  credentials:FormGroup = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>('')
  });

  onClickSubmit(){
   this.user = new User(this.state);
  this.router.navigateByUrl('/login');
  }


}
