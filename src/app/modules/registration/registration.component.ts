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
    ),
    middleName: new FormControl<string>(
      this.stateTracker.personalInfo.middleName
    ),
    lastName: new FormControl<string>(this.stateTracker.personalInfo.lastName),
    dob: new FormControl<Date|string>(this.stateTracker.personalInfo.dob),
  });
  activatedRoute: ActivatedRoute;

  next(){
    
    
  }

  constructor(private stateTracker: StateTrackerService, private router:Router,_activatedRoute:ActivatedRoute) {
    this.activatedRoute = _activatedRoute;
    this.router = router;
    
  }
}
