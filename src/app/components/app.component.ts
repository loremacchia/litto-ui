import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'litto-ui';
  Ids = {
    email: '' as string,
    firstName: '' as string,
    lastName: '' as string,
    password: '' as string,
  };
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    agreeToToC: new FormControl(false, Validators.requiredTrue),
  });

  exportIDs(): void {
    console.log('gigiigigigigi');
    if (this.form.controls['agreeToToC'].value) {
      this.Ids.email = this.form.controls['email'].value;
      this.Ids.firstName = this.form.controls['firstName'].value;
      this.Ids.lastName = this.form.controls['lastName'].value;
      this.Ids.password = this.form.controls['password'].value;
    } else {
      this.Ids.email = '';
      this.Ids.firstName = '';
      this.Ids.lastName = '';
      this.Ids.password = '';
    }
  }
}
