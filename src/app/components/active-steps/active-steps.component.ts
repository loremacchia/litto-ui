import { PlanService } from 'src/app/services/plan.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { Step } from './../../model/Step';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-active-steps',
  templateUrl: './active-steps.component.html',
  styleUrls: ['./active-steps.component.css'],
})
export class ActiveStepsComponent implements OnInit {
  userId!: number;
  steps!: Step[];
  searchContent: string = '';
  activeItemIndex = 1;
  changeDetection!: ChangeDetectionStrategy.OnPush;

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (window.history.state['userId'] !== undefined && window.history.state['planId'] !== undefined) {
      this.userId = window.history.state['userId'];
    }
    else {
      this.userId=0;
    }
    this.homeService.getCurrentGoals(this.userId)
        .subscribe(steps => {
          this.steps = steps;
        })

  }
}
