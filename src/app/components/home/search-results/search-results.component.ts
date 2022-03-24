import { Interest } from 'src/app/model/Interest';
import { NotifierComponent } from './../../injectables/notifier/notifier.component';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Plan } from '../../../model/Plan';
import { HomeService } from '../../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  searched!: string;
  activeItemIndex = 0;
  plans: Plan[] = [];
  tags: Interest[] = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private localService: LocalStorageService,
    private router: Router,
    private notifier: NotifierComponent
  ) {}

  ngOnInit(): void {
    this.localService.getLogId();

    this.activatedRoute.paramMap.subscribe(() => {
      if (window.history.state['searched'] !== undefined) {
        this.searched = window.history.state['searched'];
        this.homeService.searchForString(this.searched).subscribe((val) => {
          this.plans = val.plans;
          this.tags = val.tags;
        },
        (error) => {
          console.log(error);
          this.notifier.notifyError("Cannot search for this word");
          this.router.navigateByUrl('/home/home-page');
        });
      } else {
        this.router.navigateByUrl('/home/home-page');
      }
    });
  }

  searchString(val: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigateByUrl('/home/search-page', {
        state: { searched: val },
      })
    );
  }
}
