import { Address } from "./address";
import { ContactInformation } from "./contact-information";
import { Person } from "./person";

export interface User {
    id:number|string|undefined,
    person:Person | object | number,
    contact:ContactInformation | object | number,
    physicalAddress:Address | object | number,
    mailingAddress:Address | object | number,

    username:string  ,
    password:string
}
