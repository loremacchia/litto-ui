import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { Step } from './../../model/Step';
import { ChangeDetectionStrategy } from '@angular/core';

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
    private homeService: HomeService,
    private localService: LocalStorageService
  ) {}
  ngOnInit(): void {
    this.userId = this.localService.getLogId();
    this.homeService.getCurrentGoals(this.userId).subscribe((steps) => {
      this.steps = steps;
    });
  }
}
