import { Plan } from './../model/Plan';
import { SearchReturn } from './../model/SearchReturn';
import { Injectable } from '@angular/core';
import { UserCreate } from 'src/app/model/UserCreate';
import { User } from 'src/app/model/User';
import { Step } from '../model/Step';
import { UserInit } from './../model/userInit';
import { Interest } from '../model/interest';
import { Observable } from 'rxjs';
import { TuiDay} from '@taiga-ui/cdk';
import { map } from 'rxjs/operators';

import { HttpClient, HttpParams } from '@angular/common/http';
import { classToPlain, plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})

export class PlanService {
  private baseUrl = 'http://192.168.1.135:8000'
  headers!: 
    {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  constructor(private http: HttpClient) { }

  getPlan(planId : number) : Observable<Plan>{
    return this.http.post<Plan>(this.baseUrl + "/get-plan", JSON.stringify(planId))
      .pipe(map(res => plainToClass(Plan, res as Object)))
  }

  startPlan(userId:number, plan:Plan, from:string, to:string ): Observable<Number>{
    console.log("g9g9")
    return this.http.post(this.baseUrl + "/start-plan", JSON.stringify({"userId":userId, "planId":plan.id, "dateFrom":from, "dateTo":to }))
      .pipe(map(res => plainToClass(Number, res as Object)))
  }

  createPlan(newPlan : {[key:string]:any}) : Observable<Number>{
    return this.http.post(this.baseUrl + "/create-plan", JSON.stringify(newPlan))
      .pipe(map(res => plainToClass(Number, res as Object)))
  }

  getActiveStep(userId : number,planId : number)  : Observable<Step>{
    console.log("gigi")
    return this.http.post(this.baseUrl + "/get-active-step", JSON.stringify({"userId":userId,"planId":planId}))
      .pipe(map(res => plainToClass(Step, res as Object)))
  }

  completeStep(userId : number,planId : number)  : Observable<Boolean>{
    return this.http.post(this.baseUrl + "/next-active-step", JSON.stringify({"userId":userId,"planId":planId}))
      .pipe(map(res => res as Boolean))
  }
}