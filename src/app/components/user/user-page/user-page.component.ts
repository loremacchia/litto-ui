import { NotifierComponent } from './../../injectables/notifier/notifier.component';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  user!: User;
  activeItemIndex = 3;
  constructor(
    private localService: LocalStorageService,
    private router: Router,
    private userService: UserServiceService,
    private notifier: NotifierComponent
  ) {}

  ngOnInit(): void {
    this.localService.getLogId();
    this.userService.getUser(this.localService.getLogId()).subscribe((user) => {
      this.user = user;
    },
    error => {
      this.notifier.notifyError("Cannot retrieve the user")
      this.router.navigateByUrl('/home/home-page');
    })
  }

  logOut() {
    this.localService.removeUserId();
    this.notifier.notifySuccess('Logged out');
    this.router.navigateByUrl('/');
  }
}
