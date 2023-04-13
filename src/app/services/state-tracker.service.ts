import { Injectable } from '@angular/core';
import { User } from '../models/user';
import UserBuilder from '../models/UserBuilder';
import { Address } from '../models/address';
import { ContactInformation } from '../models/contact-information';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class StateTrackerService {
  physicalAddress: Address;
  mailingAddress: Address;
  contact: ContactInformation;
  personalInfo: Person;
  
 

  constructor() {
    this.physicalAddress = {id:undefined,addressLine1:'', addressLine2:'',city:'',state:'',zipCode:''};
    this.mailingAddress = {id:undefined,addressLine1:'', addressLine2:'',city:'',state:'',zipCode:''};
    this.contact = {id:undefined,email:'', phone:''};
    this.personalInfo = {id:undefined,firstName:'', middleName:'', lastName:'',dob:''}
    
  }
 
}
