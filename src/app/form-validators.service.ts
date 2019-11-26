import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class FormValidatorsService {
  constructor() {}

  myEmail(control: AbstractControl) {
    const value = control.value;

    if (typeof value == "string") {
      if (value.includes(".")) {
        console.log(value);
        return null;
      }
    }
    return { needDot: "Email needs a dot." };
  }

  hasError(form: FormGroup, controlName: string, errorName: string) {
    const control = form.controls[controlName];
    return control.hasError(errorName);
  }
}
