import { RecommendedPlan } from './../model/RecommendedPlans';
import { SearchReturn } from './../model/SearchReturn';
import { Injectable } from '@angular/core';
import { UserCreate } from 'src/app/model/UserCreate';
import { User } from 'src/app/model/User';
import { Step } from '../model/Step';
import { UserInit } from './../model/userInit';
import { Interest } from '../model/interest';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpParams } from '@angular/common/http';
import { classToPlain, plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  // baseUrl = "http://192.168.1.135:8000/"
  baseUrl = "http://aa09-151-41-61-172.ngrok.io"
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