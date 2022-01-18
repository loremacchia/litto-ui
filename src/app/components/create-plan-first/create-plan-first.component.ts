import { LocalStorageService } from './../../services/local-storage.service';
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
    private localService: LocalStorageService,
    private homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.localService.getLogId();
    if(this.localService.getCreatingPlan(this.userId)){
      this.parseJson(this.localService.getCreatingPlan(this.userId) as string);
    }
  }

  searchTag() {
    this.homeService.searchForString(this.searchActive).subscribe((search) => {
      this.search = search;
    });
  }

  goCustSteps(){
    this.localService.setCreatingPlan(this.createJson());
  }

  createJson() {
    const dict = {
      userId: this.userId,
      avatarUrl: this.avatarUrl,
      difficulty: this.form.controls['difficulty'].value,
      title: this.form.controls['title'].value,
      description: this.form.controls['description'].value,
      weeks: this.form.controls['weeks'].value,
      discord: this.form.controls['discord'].value,
      tags: this.form.controls['tags'].value,
    };
    return JSON.stringify(dict);
  }

  parseJson(dict : string) {
    var d = JSON.parse(dict);
    this.avatarUrl = d['avatarUrl'];
    this.form.controls['difficulty'].setValue(d['difficulty']);
    this.form.controls['title'].setValue(d['title']);
    this.form.controls['description'].setValue(d['description']);
    this.form.controls['weeks'].setValue(d['weeks']);
    this.form.controls['discord'].setValue(d['discord']);
    this.form.controls['tags'].setValue(d['tags']);
  }
}
