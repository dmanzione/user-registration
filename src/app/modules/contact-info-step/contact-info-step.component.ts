import { Component, Input } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { Person } from 'src/app/models/personal-information';
import { StateTrackerService } from 'src/app/services/state-tracker.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactInformation } from 'src/app/models/contact-information';
@Component({
  selector: 'app-contact-info-step',
  templateUrl: './contact-info-step.component.html',
  styleUrls: ['./contact-info-step.component.css'],
})
export class ContactInfoStepComponent {
  contactForm!: FormGroup;
  contact: ContactInformation;

  constructor(private stateTracker: StateTrackerService) {
    this.contact = this.stateTracker.contact;
  }
  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl<string>(this.contact.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl<string>(this.contact.phone),
    });
  }
}
