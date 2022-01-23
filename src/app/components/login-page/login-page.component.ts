import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserInit } from './../../model/userInit';
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
    private readonly notificationsService: TuiNotificationsService
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.form.valid) {
      this.userService
        .loginUser(
          this.form.controls['email'].value,
          this.form.controls['password'].value
        )
        .subscribe((retrievedId) => {
          if (retrievedId == -1) {
            this.notificationsService
              .show('Your email or password are incorrect', {
                status: TuiNotification.Error,
              })
              .subscribe();
          } else {
            this.notificationsService
              .show('Correct Login!', { status: TuiNotification.Success })
              .subscribe();
            this.localService.setCurrentUserId(retrievedId);
            this.router.navigateByUrl('/user-page');
          }
        });
    } else {
      this.notificationsService
        .show('Your email or password are incorrect', {
          status: TuiNotification.Error,
        })
        .subscribe();
    }
  }
}
