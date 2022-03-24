import { NotifierComponent } from './../../../injectables/notifier/notifier.component';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserInit } from '../../../../model/UserInit';
import { UserServiceService } from 'src/app/services/user-service.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserServiceService,
    private localService: LocalStorageService,
    private router: Router,
    private readonly notificationsService: TuiNotificationsService,
    private notifier: NotifierComponent
  ) {}

  ngOnInit(): void {}

  async createUser() {
    this.form.controls['email'].setValue(
      this.form.controls['email'].value.trim()
    );
    if (this.form.valid) {
      await this.userService
        .createUser(
          new UserInit(
            this.form.controls['username'].value,
            this.form.controls['email'].value,
            this.form.controls['password'].value
          )
        )
        .subscribe(
          (tokenId) => {
            this.notificationsService
              .show('Check your Email to continue the registration', {
                status: TuiNotification.Info,
              })
              .subscribe();
            this.localService.setCurrentUserId(tokenId.id);
            this.localService.setToken(tokenId.token)
            this.router.navigateByUrl('/user/register-second');
          },
          (error) => {
            console.log(error);
            this.notifier.notifyError('Email already used, try a different one or log-in');
          }
        );
    } else {
      this.notifier.notifyError('Your email, username or password are invalid');
    }
  }
}
