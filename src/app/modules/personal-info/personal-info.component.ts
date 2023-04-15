import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateTrackerService } from 'src/app/services/state-tracker.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {


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


