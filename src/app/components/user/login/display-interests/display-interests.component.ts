import { NotifierComponent } from './../../../injectables/notifier/notifier.component';
import { LocalStorageService } from './../../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Interest } from 'src/app/model/Interest';
import { UserCreate } from 'src/app/model/UserCreate';

@Component({
  selector: 'app-display-interests',
  templateUrl: './display-interests.component.html',
  styleUrls: ['./display-interests.component.css'],
})
export class DisplayInterestsComponent implements OnInit {
  actualInterests: string[] = [];
  interests!: Interest[];
  user: UserCreate = new UserCreate();

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceService,
    private router: Router,
    private localService: LocalStorageService,
    private notifier: NotifierComponent
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      if (window.history.state['user'] !== undefined) {
        this.user.setInitial(
          window.history.state['user'].bio,
          window.history.state['user'].name,
          window.history.state['user'].surname,
          window.history.state['user'].imageUrl
        );
      } else {
        this.user.setInitial(
          '',
          '',
          '',
          'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'
        );
      }
    });
    this.localService.getLogId();

    // Retrieving all the interests from the server to let the users choose their
    this.getInterests().subscribe(
      (val) => {
        this.interests = val;
        if (
          window.history.state['user'] !== undefined &&
          window.history.state['user'].interests !== undefined
        ) {
          // If the user has already chosen some interests, they are displayed with some opacity
          this.actualInterests = window.history.state['user'].interests;
          for (let i of this.interests) {
            if (this.actualInterests.includes(i.name)) {
              i.isActive = true;
            }
          }
        }
      },
      (error) => {
        this.notifier.notifyError('Cannot retrieve interests');
        this.router.navigateByUrl('/user/register-second', {
          state: { user: this.user },
        });
      }
    );
  }

  // Retrieving interests
  getInterests() {
    return this.userService.getInitialInterests();
  }

  // Adding opacity
  clicky(i: Interest) {
    i.isActive = !i.isActive;
  }

  // Selecting the interests chosen by the user
  computeActualInterests() {
    this.actualInterests = [];
    for (let i of this.interests) {
      if (i.isActive) {
        this.actualInterests.push(i.name);
      }
    }
  }

  // Posting the data to the server
  completeUserAccount() {
    this.computeActualInterests();
    this.user.setInterests(this.actualInterests);
    this.userService
      .completeUserAccount(this.localService.getLogId(), this.user)
      .subscribe(
        (val) => {
          if(val){
            this.notifier.notifySuccess('Correctly Registered!');
            this.router.navigateByUrl('/home/home-page');
          }
          else {
            this.notifier.notifyError('Cannot complete the user account');
          }
          
        }
      );
  }

  // Going back to the register-second page
  back() {
    this.computeActualInterests();
    this.user.setInterests(this.actualInterests);
    this.router.navigateByUrl('/user/register-second', {
      state: { user: this.user },
    });
  }
}
