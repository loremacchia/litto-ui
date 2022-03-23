import { Plan } from './../model/Plan';
import { Injectable } from '@angular/core';
import { Step } from '../model/Step';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})

export class PlanService {
  baseUrl = "http://localhost:8080/litto-backend/webapi/" + "ogm";
  // baseUrl = "http://b7ed-151-41-61-172.ngrok.io"
  headers!: 
    {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  constructor(private http: HttpClient) { }

  getPlan(planId : string) : Observable<Plan>{
    return this.http.get<Plan>(this.baseUrl + "/plan/"+planId)
      .pipe(map(res => plainToClass(Plan, res as Object)))
  }

  startPlan(userId:string, plan:Plan, from:string, to:string ): Observable<Boolean>{
    return this.http.post(this.baseUrl + "/user/"+userId+"/start/"+plan.id+"", JSON.stringify({"dateFrom":from, "dateTo":to }))
      .pipe(map(res => plainToClass(Boolean, res as Object)))
  }

  createPlan(userId: string, newPlan : {[key:string]:any}) : Observable<string>{
    return this.http.post(this.baseUrl + "/plan/create/"+userId, JSON.stringify(newPlan))
      .pipe(map(res => res as string))
  }

  getActiveStep(userId : string,planId : string)  : Observable<Step>{
    return this.http.get(this.baseUrl + "/step/"+userId+"/"+planId)
      .pipe(map(res => plainToClass(Step, res as Object)))
  }

  completeStep(userId : string,planId : string, planWeek:number)  : Observable<Boolean>{
    return this.http.get(this.baseUrl + "/step/"+userId+"/"+planId+"/next/"+planWeek)
      .pipe(map(res => res as Boolean))
  }
}