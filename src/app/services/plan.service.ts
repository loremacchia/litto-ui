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
  baseUrl = "http://192.168.1.135:8000/"
  // baseUrl = "http://b7ed-151-41-61-172.ngrok.io"
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