import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormValidatorsService } from "../form-validators.service";
import { ContactService } from "./contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  private contact = this.contactService.getNew();

  constructor(
    formBuilder: FormBuilder,
    private contactService: ContactService,
    private formValidators: FormValidatorsService
  ) {
    this.contactForm = formBuilder.group({
      contactName: [this.contact.contactName, Validators.required],
      email: [
        this.contact.email,
        [Validators.required, Validators.email, formValidators.myEmail]
      ],
      subject: [
        this.contact.subject,
        [Validators.required, Validators.minLength(4)]
      ],
      age: [this.contact.age, [Validators.min(18), Validators.max(99)]]
    });
  }

  ngOnInit() {}

  saveClick() {
    this.contactService.save(this.contactForm.value);
  }

  hasErrors(controlName: string) {
    return this.contactForm.controls[controlName].invalid;
  }

  isTouched(controlName: string) {
    return this.contactForm.controls[controlName].touched;
  }

  hasError(controlName: string, errorName: string) {
    return this.formValidators.hasError(
      this.contactForm,
      controlName,
      errorName
    );
  }
}
