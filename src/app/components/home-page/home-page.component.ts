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

  constructor(
    private homeService: HomeService,
    private localService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.id = this.localService.getLogId();
    this.homeService.getCurrentGoals(this.id).subscribe((steps) => {
      this.steps = steps;
      console.log(this.steps);
    });
  }
}
