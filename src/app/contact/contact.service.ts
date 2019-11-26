import { Injectable } from "@angular/core";

@Injectable()
export class ContactService {
  constructor() {}

  getNew() {
    return {
      contactName: "",
      email: "",
      subject: "",
      age: 1
    };
  }

  save(contact) {
    contact.email = contact.email.toUpperCase();
    console.log(contact);
  }
}
