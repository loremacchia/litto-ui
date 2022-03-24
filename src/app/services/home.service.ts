import { RecommendedPlan } from './../model/RecommendedPlans';
import { SearchReturn } from './../model/SearchReturn';
import { Injectable } from '@angular/core';
import { Step } from '../model/Step';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = 'http://localhost:8080/litto-backend/webapi/' + 'ogm';

  // baseUrl = "http://b7ed-151-41-61-172.ngrok.io"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getCurrentGoals(userId: string): Observable<Step[]> {
    return this.http
      .get<Step[]>(
        this.baseUrl + '/user/' + userId + '/goals',
        this.httpOptions
      )
      .pipe(map((res) => plainToClass(Step, res as Object[])));
  }

  searchForString(searched: string): Observable<SearchReturn> {
    return this.http
      .get<SearchReturn>(this.baseUrl + '/search/' + searched, this.httpOptions)
      .pipe(map((res) => plainToClass(SearchReturn, res as Object)));
  }

  getRecommendedPlans(userId: string): Observable<RecommendedPlan> {
    return this.http
      .get<RecommendedPlan>(
        this.baseUrl + '/user/' + userId + '/recommended',
        this.httpOptions
      )
      .pipe(map((res) => plainToClass(RecommendedPlan, res as Object)));
  }
}
