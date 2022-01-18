import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserInit } from './../../model/userInit';
import { UserServiceService } from 'src/app/services/user-service.service';
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

  constructor(
    private userService: UserServiceService,
    private localService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.userService
      .loginUser(
        this.form.controls['email'].value,
        this.form.controls['password'].value
      )
      .subscribe((retrievedId) => {
        this.localService.setCurrentUserId(retrievedId);
        this.router.navigateByUrl('/user-page');
      });
  }
}
