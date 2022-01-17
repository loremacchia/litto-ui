import { SearchReturn } from './../../model/SearchReturn';
import { Plan } from './../../model/Plan';
import { HomeService } from './../../services/home.service';
import { Step } from './../../model/Step';
import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  id! : number
  searched! : string;
  activeItemIndex = 0;
  plans : Plan[] = []
  tags : string[] = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(() => {
      
      if (window.history.state['id'] !== undefined) {
        this.id = window.history.state['id'];
        this.searched = window.history.state['searched']

      }
      else{
        this.id = 0;
        this.searched = "Jav";
      }
        console.log(this.id)
        console.log(this.searched)
        this.homeService.searchForString(this.searched)
          .subscribe(val => {
            this.plans = val.plans;
            this.tags = val.tags;
          })
    })      
  }
  
  searchString(val:string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigateByUrl('/search-page', { state: { id:this.id, searched:val } }));  
  }
}