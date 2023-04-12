import { Injectable } from '@angular/core';
import { User } from '../models/user';
import UserBuilder from './UserBuilder';

@Injectable({
  providedIn: 'root'
})
export class StateTrackerService {
  userBuilder:UserBuilder;

  constructor() { 
   this.userBuilder = UserBuilder.getBuilder();
  }
  
  getUser(): User {
    return this.userBuilder.build();
  }
  
  setUser(user: User): void {
    this.userBuilder.withUser(user);
  }
}
