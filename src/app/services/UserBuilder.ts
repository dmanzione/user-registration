import { Address } from "../models/address";
import { ContactInformation } from "../models/contact-information";
import { Person } from "../models/person";
import { User } from "../models/user";


export default class UserBuilder {
  userBuilder!: UserBuilder;
  static getBuilder(): UserBuilder {
    return new UserBuilder();
  }

  user: User;

  private constructor() {
    this.user = {
      id: undefined,
      physicalAddress: {},
      mailingAddress: {},
      username: '',
      password: '',
      contact: {},
      person: {},
    };
  }

  static getBuilderWithUser(user: User): UserBuilder {
    return new UserBuilder().withUser(user);
  }
  withUser(user: User): UserBuilder {
    this.userBuilder.user = user;
    return this;
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