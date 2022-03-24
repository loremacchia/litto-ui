import { TokenId } from './../model/TokenId';
import { UserCreate } from 'src/app/model/UserCreate';
import { User } from 'src/app/model/User';
import { UserInit } from '../model/UserInit';
import { Interest } from '../model/Interest';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { classToPlain, plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  baseUrl = 'http://localhost:8080/litto-backend/webapi/' + 'ogm';
  // baseUrl = "http://b7ed-151-41-61-172.ngrok.io"
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
  };
  constructor(private http: HttpClient) {}

  createUser(user: UserInit): Observable<TokenId> { // TODO ritorna token e id
    return this.http.post<TokenId>(
      this.baseUrl + '/user',
      JSON.stringify(classToPlain(user) ), this.httpOptions
    ).pipe(map((res) => plainToClass(TokenId, res as Object)));;
  }

  loginUser(email: string, password: string): Observable<TokenId> { // TODO ritorna token e id
    return this.http.post<TokenId>(
      this.baseUrl + '/user/login',
      JSON.stringify({ email: email, password: password }), this.httpOptions
    ).pipe(map((res) => plainToClass(TokenId, res as Object)));;
  }

  getInitialInterests(): Observable<Interest[]> {
    return this.http
      .get(this.baseUrl + '/user/interests',this.httpOptions)
      .pipe(map((res) => plainToClass(Interest, res as Object[])));
  }

  completeUserAccount(id: string, user: UserCreate): Observable<boolean> {
    return this.http.post<boolean>(
      this.baseUrl + '/user/' + id,
      JSON.stringify(classToPlain(user)), this.httpOptions
    );
  }

  getUser(id: string): Observable<User> {
    return this.http
      .get(this.baseUrl + '/user/' + id, this.httpOptions)
      .pipe(map((res) => plainToClass(User, res as Object)));
  }

  deleteUser(id: string): Observable<boolean> {
    return this.http
      .delete<boolean>(this.baseUrl + '/user/' + id, this.httpOptions);
  }
}
