import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Interest } from 'src/app/model/interest';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  id!: number;
  user!: User;
  activeItemIndex = 3;
  constructor(
    private activatedRoute: ActivatedRoute,
    private localService: LocalStorageService,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.id = this.localService.getLogId();
    this.userService.getUser(this.id).subscribe((user) => {
      this.user = user;
      this.user.id = this.id;
      console.log(this.user);
    });
  }
}
