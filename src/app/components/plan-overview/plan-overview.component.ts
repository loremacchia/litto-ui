import { LocalStorageService } from './../../services/local-storage.service';
import { Step } from './../../model/Step';
import { Plan } from './../../model/Plan';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from 'src/app/services/plan.service';
import { Interest } from 'src/app/model/interest';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-plan-overview',
  templateUrl: './plan-overview.component.html',
  styleUrls: ['./plan-overview.component.css'],
})
export class PlanOverviewComponent implements OnInit {
  userId!: number;
  planId!: number;
  plan!: Plan;
  activeItemIndex = 0;
  length!: number;
  weekIndex = 0;
  currentStep!: Step;
  constructor(
    private activatedRoute: ActivatedRoute,
    private planService: PlanService,
    private localService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.localService.getLogId();
    this.activatedRoute.paramMap.subscribe(() => {
      if (window.history.state['planId'] !== undefined) {
        this.planId = window.history.state['planId'];
      } else {
        this.planId = 0;
      }
      this.planService.getPlan(this.planId).subscribe((plan) => {
        this.plan = plan;
        this.length = this.plan.steps.length;
        this.currentStep = this.searchStep(this.weekIndex);
      });
    });
  }

  searchStep(idWeek: number): Step {
    for (var s of this.plan.steps) {
      if (s.planWeek == idWeek + 1) {
        return s;
      }
    }
    return this.plan.steps[0];
  }

  changeIndex(index: number) {
    this.weekIndex = index;
    this.currentStep = this.searchStep(this.weekIndex);
  }

  startPlan() {
    this.router.navigateByUrl('/start-plan', {
      state: { plan: this.plan },
    });
  }
}
