import { LocalStorageService } from './../../services/local-storage.service';
import { Plan } from './../../model/Plan';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from 'src/app/services/plan.service';
import { TuiDay, TuiDayRange, TuiMonth, TuiTime } from '@taiga-ui/cdk';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start-plan-date',
  templateUrl: './start-plan-date.component.html',
  styleUrls: ['./start-plan-date.component.css'],
})
export class StartPlanDateComponent implements OnInit {
  plan!: Plan;
  activeItemIndex = 1;
  userId!: number;
  value!: TuiDayRange;
  firstMonth = TuiMonth.currentLocal();
  hoveredItem: TuiDay | null = null;

  notificationForm = new FormGroup({
    notifications: new FormControl(true),
    notifyTime: new FormControl(new TuiTime(12, 30)),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private planService: PlanService,
    private localService: LocalStorageService,
    private router: Router
  ) {}

  onDayClick(day: TuiDay) {
    let year = day.year;
    let month = day.month;
    let da = day.day;
    let counter = 0;
    while (counter < this.plan.duration * 7) {
      counter += 1;
      da += 1;
      if (da > day.daysCount) {
        month += 1;
        da = 1;
      }
      if (month > 11) {
        year += 1;
        month = 0;
      }
    }
    let day1 = new TuiDay(year, month, da);
    this.value = new TuiDayRange(day, day1);
  }

  ngOnInit(): void {
    this.userId = this.localService.getLogId();
    this.activatedRoute.paramMap.subscribe(() => {
      if (window.history.state['plan'] !== undefined) {
        this.plan = window.history.state['plan'];
      } else {
        this.router.navigateByUrl('/view-plan', {
          state: {
            planId: 0,
          },
        });
      }
      this.onDayClick(TuiDay.currentLocal());
    });
  }

  startPlan() {
    this.planService
      .startPlan(
        this.userId,
        this.plan,
        this.value.from.toString(),
        this.value.to.toString()
      ) //per riportarle ok usare parseRawDateString
      .subscribe((activePlanId) =>
        this.router.navigateByUrl('/step-complete', {
          state: { planId: activePlanId },
        })
      );
  }
}
