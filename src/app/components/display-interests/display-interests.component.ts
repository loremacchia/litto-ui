import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Interest } from 'src/app/model/interest';
import { UserCreate } from 'src/app/model/UserCreate';

@Component({
  selector: 'app-display-interests',
  templateUrl: './display-interests.component.html',
  styleUrls: ['./display-interests.component.css'],
})
export class DisplayInterestsComponent implements OnInit {
  id!: number;
  actualInterests: string[] = [];
  interests!: Interest[];
  user: UserCreate = new UserCreate();

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceService,
    private localService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      if (window.history.state['user'] !== undefined) {
        this.user.setInitial(
          window.history.state['user'].id,
          window.history.state['user'].bio,
          window.history.state['user'].name,
          window.history.state['user'].surname
        );
        this.id = window.history.state['user'].id;
      } else {
        this.id = this.localService.getLogId();
        this.user.setInitial(this.id, '', '', '');
      }
    });
    this.getInterests().subscribe((val) => {
      this.interests = val;
      if (
        window.history.state['user'] !== undefined &&
        window.history.state['user'].interests !== undefined
      ) {
        this.actualInterests = window.history.state['user'].interests;
        for (let i of this.interests) {
          if (this.actualInterests.includes(i.inter)) {
            i.isActive = true;
          }
        }
      }
    });
  }

  getInterests() {
    return this.userService.getInitialInterests();
  }

  clicky(i: Interest) {
    i.isActive = !i.isActive;
  }

  computeActualInterests() {
    this.actualInterests = [];
    for (let i of this.interests) {
      if (i.isActive) {
        this.actualInterests.push(i.inter);
      }
    }
  }

  completeUserAccount() {
    this.computeActualInterests();
    this.user.setInterests(this.actualInterests);
    this.userService
      .completeUserAccount(this.id, this.user)
      .subscribe((val) => {
        this.router.navigateByUrl('/user-page');
      });
  }

  back() {
    this.computeActualInterests();
    this.user.setInterests(this.actualInterests);
    this.router.navigateByUrl('/register-second', {
      state: { id: this.id, user: this.user },
    });
  }
}
