import { StateTrackerService } from "../services/state-tracker.service";
import { Address } from "./address";
import { ContactInformation } from "./contact-information";
import { Credentials } from "./credentials";
import { PersonalInformation } from "./personal-information";

export default class User {

    private personalInfo:PersonalInformation;
    private contact: ContactInformation;
    private physicalAddress:Address;
    private mailingAddress:Address;
    private creds:Credentials;


constructor(formState:StateTrackerService) {
    this.personalInfo = formState.personalInfo;
    this.contact = formState.contact;
    this.physicalAddress = formState.physicalAddress;
    this.mailingAddress = formState.mailingAddress;
    this.creds = formState.creds;


}


}