import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { StateTrackerService } from 'src/app/services/state-tracker.service';

@Component({
  selector: 'app-address-step',
  templateUrl: './address-step.component.html',
  styleUrls: ['./address-step.component.css'],
})
export class AddressStepComponent  {
 physicalAddress!: Address;
  mailingAddress!: Address;
  addresses!: FormGroup;
  constructor(private stateTracker:StateTrackerService){
    this.physicalAddress = stateTracker.physicalAddress;
    this.mailingAddress = stateTracker.mailingAddress;
  }

  ngOnInit() {
   this.addresses= new FormGroup({
    mailingAddress: new FormGroup({
      
      addressLine1: new FormControl<string>(this.mailingAddress.addressLine1),
      addressLine2: new FormControl<string>(this.mailingAddress.addressLine2),
      city: new FormControl<string>(this.mailingAddress.city),
      state: new FormControl<string>(this.mailingAddress.state),
      zip: new FormControl<string>(this.mailingAddress.zipCode),
      
    }),
    physicalAddress: new FormGroup({
      addressLine1: new FormControl<string>(this.physicalAddress.addressLine1),
      addressLine2: new FormControl<string>(this.physicalAddress.addressLine2),
      city: new FormControl<string>(this.physicalAddress.city),
      state: new FormControl<string>(this.physicalAddress.state),
      zip: new FormControl<string>(this.physicalAddress.zipCode),
    }),
    });
  }
  



}
