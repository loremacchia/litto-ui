import { SearchReturn } from './../../model/SearchReturn';
import { PlanService } from 'src/app/services/plan.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { Step } from './../../model/Step';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-plan-first',
  templateUrl: './create-plan-first.component.html',
  styleUrls: ['./create-plan-first.component.css'],
})
export class CreatePlanFirstComponent implements OnInit {
  searchActive = '';
  userId!: number;
  activeItemIndex = 2;
  avatarUrl =
    'https://www.idmore.it/wp-content/uploads/2016/12/ef3-placeholder-image.jpg';
  form = new FormGroup({
    difficulty: new FormControl(1),
    title: new FormControl(''),
    description: new FormControl(''),
    weeks: new FormControl(1),
    discord: new FormControl(true),
    tags: new FormControl([]),
  });
  search!: SearchReturn;
  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (window.history.state['userId'] !== undefined) {
      this.userId = window.history.state['userId'];
    } else {
      this.userId = 0;
    }
    if (window.history.state['difficulty'] !== undefined) {
      this.form.controls['difficulty'].setValue(
        window.history.state['difficulty']
      );
      this.form.controls['title'].setValue(window.history.state['title']);
      this.form.controls['description'].setValue(
        window.history.state['description']
      );
    }
  }

  searchTag() {
    this.homeService.searchForString(this.searchActive).subscribe((search) => {
      this.search = search;
    });
  }
}
