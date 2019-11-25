import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  private contact = {
    contactName: "",
    email: "",
    subject: "",
    age: 1
  };

  constructor(formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      contactName: [this.contact.contactName, Validators.required],
      email: [
        this.contact.email,
        [Validators.required, Validators.email, this.myEmail]
      ],
      subject: [
        this.contact.subject,
        [Validators.required, Validators.minLength(4)]
      ],
      age: [this.contact.age, [Validators.min(18), Validators.max(99)]]
    });
  }

  myEmail(control: AbstractControl) {
    const value = control.value;
    if (typeof value == "string") {
      if (value.includes(".")) {
        console.log(value);
        return null;
      }
    }
    return { needDot: true };
  }

  ngOnInit() {}

  saveClick() {
    console.log(this.contactForm.value);
    console.log(this.contact);
    this.contact = this.contactForm.value;
    this.contact.email = this.contact.email.toUpperCase();
    console.log(this.contact);
  }

  hasErrors(controlName: string) {
    return this.contactForm.controls[controlName].invalid;
  }

  isTouched(controlName: string) {
    return this.contactForm.controls[controlName].touched;
  }

  hasError(controlName: string, errorName: string) {
    const control = this.contactForm.controls[controlName];
    return control.hasError(errorName);
  }
}
