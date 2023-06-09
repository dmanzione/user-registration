import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';

import { Address } from '../models/address';
import { ContactInformation } from '../models/contact-information';
import { PersonalInformation } from '../models/personal-information';

@Injectable({
  providedIn: 'root',
})
export class StateTrackerService {
  physicalAddress: Address;
  mailingAddress: Address;
  contact: ContactInformation;
  personalInfo: PersonalInformation;
  creds:Credentials;

 

  constructor() {
    this.physicalAddress = {id:undefined,addressLine1:'', addressLine2:'',city:'',state:'',zipCode:''};
    this.mailingAddress = {id:undefined,addressLine1:'', addressLine2:'',city:'',state:'',zipCode:''};
    this.contact = {id:undefined,email:'', phone:''};
    this.personalInfo = {id:undefined,firstName:'', middleName:'', lastName:'',dob:''}
    this.creds = {username:'',password:''};
    
  }

  
 
}
