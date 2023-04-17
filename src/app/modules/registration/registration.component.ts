import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateTrackerService } from 'src/app/services/state-tracker.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {

  personForm = new FormGroup({
    firstName: new FormControl<string>(
      this.stateTracker.personalInfo.firstName
    ,[Validators.required]),
    middleName: new FormControl<string>(
      this.stateTracker.personalInfo.middleName
    ),
    lastName: new FormControl<string>(this.stateTracker.personalInfo.lastName),
    dob: new FormControl<Date|string>(this.stateTracker.personalInfo.dob),
  });
  activatedRoute: ActivatedRoute;

  next(){
    
    if(this.personForm.invalid){
      redAlert("Please make sure to fill out the form correctly")
    }else {
      this.router.navigateByUrl('contact')
    }
    
  }

  constructor(private stateTracker: StateTrackerService, private router:Router,activatedRoute:ActivatedRoute) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    
  }
}
function redAlert(arg0: string) {
  
}

