import { HomeService } from './../../services/home.service';
import { Step } from './../../model/Step';
import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  id!: number
  steps!: Step[]
  searchContent:string=""
  activeItemIndex = 0;
  changeDetection!: ChangeDetectionStrategy.OnPush;

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get("id"));
      console.log(this.id)
      this.homeService.getCurrentGoals(this.id)
        .subscribe(steps => {
          this.steps = steps;
          console.log(this.steps)
        })

    })      
  }

  onTabClick(i : number) {
    console.log(i)
  }
}
