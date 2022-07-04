import { AbstractControl } from "@angular/forms";

export function passwordValidator(control: AbstractControl){
  if (control.value.length < 8) {
    return { isPasswordValid: false };
  }

  if (control.value[0]?.toUpperCase() !== control.value[0]) {
    return { isPasswordValid: false };
  }

  if (!control.value.includes('#')) {
    return { isPasswordValid: false };
  }

  return null;
}
