import { NotifierComponent } from './../../../injectables/notifier/notifier.component';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})

export class LoginPageComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  succeed: boolean = false;

  constructor(
    private userService: UserServiceService,
    private localService: LocalStorageService,
    private router: Router,
    private notifier: NotifierComponent
  ) {}

  ngOnInit(): void {}

  login() {
    this.form.controls['email'].setValue(this.form.controls['email'].value.trim())
    if (this.form.valid) {
      this.userService
        .loginUser(
          this.form.controls['email'].value,
          this.form.controls['password'].value
        )
        .subscribe((retrievedId) => {
          if (retrievedId == null) {
            this.notifier.notifyError('Your email or password are incorrect');
          } else {
            this.notifier.notifySuccess('Correct Login!');
            this.localService.setCurrentUserId(retrievedId);
            this.router.navigateByUrl('/home/home-page');
          }
        },
        (error) => {
          console.log(error);
          this.notifier.notifyError('Your email or password are incorrect and caused server error');
        }
        );
    } else {
      this.notifier.notifyError('Your email or password are incorrect');
    }
  }
}
