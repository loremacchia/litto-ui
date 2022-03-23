import { RecommendedPlan } from './../model/RecommendedPlans';
import { SearchReturn } from './../model/SearchReturn';
import { Injectable } from '@angular/core';
import { Step } from '../model/Step';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  baseUrl = "http://192.168.1.136:8080/"
  // baseUrl = "http://b7ed-151-41-61-172.ngrok.io"
  headers!: 
    {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  constructor(private http: HttpClient) { }

  getCurrentGoals(userId:number) : Observable<Step[]>{
    return this.http.post<Step[]>(this.baseUrl + "/get-current-goals", JSON.stringify(userId))
      .pipe(map(res => plainToClass(Step, res as Object[])))
  }

  searchForString(searched:string) : Observable<SearchReturn> {
    return this.http.post<SearchReturn>(this.baseUrl + "/search", JSON.stringify(searched))
      .pipe(map(res => plainToClass(SearchReturn, res as Object)))
  }

  getRecommendedPlans(userId:number) : Observable<RecommendedPlan[]>{
    return this.http.post<RecommendedPlan[]>(this.baseUrl + "/get-recommended-plans", JSON.stringify(userId))
      .pipe(map(res => plainToClass(RecommendedPlan, res as Object[])))
  }
}