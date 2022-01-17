import { Router } from '@angular/router';
import { HomeService } from './../../../services/home.service';
import { SearchReturn } from './../../../model/SearchReturn';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  search! : SearchReturn;
  form = new FormGroup({
      searchedValue: new FormControl()
  });
  @Input() id! : number;
  constructor(private homeService: HomeService, private router: Router) { }

  searchStringInit() {
    this.homeService.searchForString(this.form.controls['searchedValue'].value)
        .subscribe(search => {
          this.search = search;
          console.log(this.search)
          // update dropdown (it has to be shown when the search bar is hovered)
        });
  }

  searchString(val:string) {
    console.log(val)
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigateByUrl('/search-page', { state: { id:this.id, searched:val } }));  
  }

  ngOnInit(): void {
  }

}
