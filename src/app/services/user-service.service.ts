import { UserCreate } from 'src/app/model/UserCreate';
import { User } from 'src/app/model/User';
import { UserInit } from '../model/UserInit';
import { Interest } from '../model/Interest';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { classToPlain, plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  baseUrl = "http://localhost:8080/litto-backend/webapi/" + "ogm";
  // baseUrl = "http://b7ed-151-41-61-172.ngrok.io"
  constructor(private http: HttpClient) { }

  createUser(user: UserInit): Observable<string> {
    return this.http.post<string>(this.baseUrl + "/user", JSON.stringify(classToPlain(user)));
  }

  loginUser(email: string, password: string) : Observable<string> {
    return this.http.post<string>(this.baseUrl + "/user/login", JSON.stringify({"email":email, "password":password}))
  }

  getInitialInterests(): Observable<Interest[]> {
    return this.http.get(this.baseUrl + "/interests")
      .pipe(map(res => plainToClass(Interest, res as Object[])))
  }

  completeUserAccount(id: string, user: UserCreate): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + "/user/"+id, JSON.stringify(classToPlain(user)));
  }

  getUser(id: string): Observable<User> {
    return this.http.get(this.baseUrl + "/user/"+id)
      .pipe(map(res => plainToClass(User, res as Object)))
  }

}