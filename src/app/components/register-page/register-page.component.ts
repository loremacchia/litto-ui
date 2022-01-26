import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserInit } from './../../model/userInit';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  id!: number;
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserServiceService,
    private localService: LocalStorageService,
    private router: Router,
    private readonly notificationsService: TuiNotificationsService
  ) {}

  ngOnInit(): void {}

  async createUser() {
    await this.userService
      .createUser(
        new UserInit(
          this.form.controls['username'].value,
          this.form.controls['email'].value,
          this.form.controls['password'].value
        )
      )
      .subscribe((retrievedId) => {
        this.notificationsService
          .show('Check your Email to continue the registration', {
            status: TuiNotification.Info,
          })
          .subscribe();
        this.id = +retrievedId;
        this.localService.setCurrentUserId(retrievedId);
        this.router.navigateByUrl('/register-second');
      });
  }
}
