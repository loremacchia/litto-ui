import { UserCreate } from 'src/app/model/UserCreate';
import { User } from 'src/app/model/User';
import { UserInit } from './../model/userInit';
import { Interest } from '../model/interest';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpParams } from '@angular/common/http';
import { classToPlain, plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  // baseUrl = "http://192.168.1.135:8000/"
  baseUrl = "http://aa09-151-41-61-172.ngrok.io"
  constructor(private http: HttpClient) { }

  createUser(user: UserInit): Observable<number> {
    return this.http.post<number>(this.baseUrl + "/create-user", JSON.stringify(classToPlain(user)));
  }

  loginUser(email: string, password: string) : Observable<number> {
    console.log("loginUser")
    console.log(email + " "+ password)
    let returny = JSON.stringify({"email":email, "password":password})
    console.log(returny)
    return this.http.post<number>(this.baseUrl + "/login-user", returny)
  }

  getInitialInterests(): Observable<Interest[]> {
    return this.http.get(this.baseUrl + "/get-interests")
      .pipe(map(res => plainToClass(Interest, res as Object[])))
  }

  completeUserAccount(id: number, user: UserCreate): Observable<void> {
    return this.http.post<void>(this.baseUrl + "/complete-user", JSON.stringify(classToPlain(user)));
  }

  getUser(id: number): Observable<User> {
    return this.http.post(this.baseUrl + "/user-page", JSON.stringify(id))
      .pipe(map(res => plainToClass(User, res as Object)))
  }

}