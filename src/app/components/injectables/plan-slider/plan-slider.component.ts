import { Plan } from './../../../model/Plan';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-slider',
  templateUrl: './plan-slider.component.html',
  styleUrls: ['./plan-slider.component.css'],
})
export class PlanSliderComponent implements OnInit {
  @Input() plans!: Plan[];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goOverview(plan: Plan) {
    this.router.navigateByUrl('/view-plan', {
      state: { planId: plan.id },
    });
  }
}
