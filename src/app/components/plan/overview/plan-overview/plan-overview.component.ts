import { NotifierComponent } from './../../../injectables/notifier/notifier.component';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { Step } from '../../../../model/Step';
import { Plan } from '../../../../model/Plan';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan-overview',
  templateUrl: './plan-overview.component.html',
  styleUrls: ['./plan-overview.component.css'],
})
export class PlanOverviewComponent implements OnInit {
  planId!: string;
  plan!: Plan;
  activeItemIndex = 0;
  duration!: number;
  weekIndex = 0;
  currentStep!: Step;
  constructor(
    private activatedRoute: ActivatedRoute,
    private planService: PlanService,
    private localService: LocalStorageService,
    private router: Router,
    private notifier: NotifierComponent
  ) {}

  ngOnInit(): void {
    this.localService.getLogId();
    this.activatedRoute.paramMap.subscribe(() => {
      if (window.history.state['planId'] !== undefined) {
        this.planId = window.history.state['planId'];
      } else {
        this.router.navigateByUrl('/home/home-page');
      }
      console.log(this.planId);
      this.planService.getPlan(this.planId).subscribe((plan) => {
        this.plan = plan;
        this.duration = this.plan.duration;
        this.currentStep = this.searchStep(this.weekIndex);
        console.log(this.plan);
      },
      error => {
        this.notifier.notifyError("Cannot retrieve the plan");
        this.router.navigateByUrl('/home/home-page');
      }
      );
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
    this.router.navigateByUrl('/plan/overview/start-plan', {
      state: { plan: this.plan },
    });
  }
}
