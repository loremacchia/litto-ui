import { NotifierComponent } from './../notifier/notifier.component';
import { Router } from '@angular/router';
import { HomeService } from './../../../services/home.service';
import { SearchReturn } from './../../../model/SearchReturn';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
})
export class SearchItemComponent implements OnInit {
  search!: SearchReturn;
  form = new FormGroup({
    searchedValue: new FormControl(),
  });
  constructor(
    private homeService: HomeService,
    private router: Router,
    private notifier: NotifierComponent
  ) {}

  searchStringInit() {
    this.homeService
      .searchForString(this.form.controls['searchedValue'].value)
      .subscribe(
        (search) => {
          this.search = search;
          console.log(this.search);
        },
        (error) => {
          console.log(error);
          this.notifier.notifyError('Cannot search for this word');
        }
      );
  }

  searchString(val: string) {
    console.log(val);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigateByUrl('/home/search-page', {
        state: { searched: val },
      })
    );
  }

  ngOnInit(): void {}
}
