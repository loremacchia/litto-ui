import { NotifierComponent } from './../injectables/notifier/notifier.component';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { Step } from './../../model/Step';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-active-steps',
  templateUrl: './active-steps.component.html',
  styleUrls: ['./active-steps.component.css'],
})
export class ActiveStepsComponent implements OnInit {
  steps!: Step[];
  searchContent: string = '';
  activeItemIndex = 1;
  changeDetection!: ChangeDetectionStrategy.OnPush;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private localService: LocalStorageService,
    private notifier: NotifierComponent
  ) {}
  ngOnInit(): void {
    this.localService.getLogId();
    this.homeService.getCurrentGoals(this.localService.getLogId()).subscribe((steps) => {
      for (let s of steps) {
        s.normalize();
      }
      this.steps = steps;
    },
    (error) => {
      console.log(error);
      this.notifier.notifyError("Cannot retrieve the current active steps");
      this.router.navigateByUrl("/user/user-page");
    });
  }

  goToStep(step: Step) {
    this.router.navigateByUrl('/plan/complete/step-complete', {
      state: { planId: step.planId },
    });
  }
}
