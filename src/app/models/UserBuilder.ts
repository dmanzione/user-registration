
import { Address } from './address';
import { ContactInformation } from './contact-information';
import { Person } from './person';
import { User } from './user';

export default class UserBuilder {
  user: User;
  


  constructor() {
    this.user = {id:undefined, contact:{}, person:{},mailingAddress:{}, physicalAddress:{}, username:'',password:''};;
  }

  getBuilder(): User {
    return this.user;
  }
  withId(id: number | string | undefined) {
    this.user.id = id;
    return this;
  }

  withUsername(username: string) {
    this.user.username = username;
    return this;
  }
  withPassword(password: string) {
    this.user.password = password;
    return this;
  }

  withPhysicalAddress(pAddress: Address): UserBuilder {
    this.user.physicalAddress = pAddress;

    return this;
  }

  withMailingAddress(mAddress: Address): UserBuilder {
    this.user.mailingAddress = mAddress;
    return this;
  }
  withContactInformation(cInformation: ContactInformation): UserBuilder {
    this.user.contact = cInformation;
    return this;
  }
  withPerson(p: Person): UserBuilder {
    this.user.person = p;
    return this;
  }

  build(): User {
    return this.user;
  }
}
