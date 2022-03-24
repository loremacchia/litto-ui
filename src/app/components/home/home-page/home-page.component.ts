import { Plan } from './../../../model/Plan';
import { NotifierComponent } from './../../injectables/notifier/notifier.component';
import { RecommendedPlan } from '../../../model/RecommendedPlans';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { HomeService } from '../../../services/home.service';
import { Step } from '../../../model/Step';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  steps!: Step[];
  searchContent: string = '';
  activeItemIndex = 0;
  changeDetection!: ChangeDetectionStrategy.OnPush;
  isRecommend :boolean= false; // Variable to check if the recommendation is on
  recommendedPlans! : Plan[];

  constructor(
    private homeService: HomeService,
    private localService: LocalStorageService,
    private router: Router,
    private notifier: NotifierComponent
  ) {}

  ngOnInit(): void {
    // this.recommendedPlans.plans = []
    this.localService.getLogId();
    this.homeService.getCurrentGoals(this.localService.getLogId()).subscribe((steps) => {
      for (let s of steps) {
        s.normalize();
      }
      this.steps = steps;
      console.log(this.steps);
    },
    (error) => {
      console.log(error);
      this.notifier.notifyError("Cannot retrieve the current active steps");
      // this.router.navigateByUrl("/user/user-page");
    });
  }

  goToStep(step: Step) {
    this.router.navigateByUrl('/plan/complete/step-complete', {
      state: { planId: step.planId },
    });
  }

  recommend(){
    this.recommendedPlans = []
    this.isRecommend = !this.isRecommend;
    if(this.isRecommend){
      this.homeService.getRecommendedPlans(this.localService.getLogId()).subscribe((val) => {
        this.recommendedPlans = val;
        if( this.recommendedPlans == undefined || this.recommendedPlans.length == 0 ){
          this.notifier.notifyError("No plan to recommend");
        }
      },
      (error) => {
        console.log(error);
        this.notifier.notifyError("Cannot recommend the plans for the user");
        this.recommendedPlans = []
        // this.isRecommend = !this.isRecommend;
      });
    }
    else {
      this.recommendedPlans = [];
    }
  }
}
