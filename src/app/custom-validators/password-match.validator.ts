import { FormGroup } from "@angular/forms";

export function passwordMatch(group: FormGroup){
  const pswControl = group.get('password');
  const pswConfirmControl = group.get('passwordConfirm');

  if (pswControl?.value === pswConfirmControl?.value) {
    return null;
  } else {
    return {
      pswMatch: false
    }
  }
}
