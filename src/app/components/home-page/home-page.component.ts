import { RecommendedPlan } from './../../model/RecommendedPlans';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../services/local-storage.service';
import { HomeService } from './../../services/home.service';
import { Step } from './../../model/Step';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  id!: number;
  steps!: Step[];
  searchContent: string = '';
  activeItemIndex = 0;
  changeDetection!: ChangeDetectionStrategy.OnPush;
  isRecommend :boolean= false;
  recommendedPlans : RecommendedPlan[] = [];
  constructor(
    private homeService: HomeService,
    private localService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.localService.getLogId();
    this.homeService.getCurrentGoals(this.id).subscribe((steps) => {
      console.log(steps);
      for (let s of steps) {
        s.normalize();
      }
      console.log(steps);
      this.steps = steps;
      console.log(this.steps);
    });
  }

  goToStep(step: Step) {
    this.router.navigateByUrl('/step-complete', {
      state: { planId: step.planId },
    });
  }

  recommend(){
    this.isRecommend = !this.isRecommend;
    if(this.isRecommend){
      this.homeService.getRecommendedPlans(this.localService.getLogId()).subscribe((val) => {
        this.recommendedPlans = val;
      })
    }
    else {
      this.recommendedPlans = [];
    }
  }
}
