import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private router: Router) {}

  getCurrentUserId() {
    return JSON.parse(localStorage.getItem('userId') as string);
  }

  setCurrentUserId(id: number) {
    localStorage.setItem('userId', JSON.stringify(id));
  }

  checkUser() {
    if (localStorage.getItem('userId')) {
      return true;
    }
    return false;
  }

  getLogId() {
    if (this.checkUser()) {
      return this.getCurrentUserId();
    } else {
      this.router.navigateByUrl('/');
    }
  }

  storeUserSubInfo() {
    return true;
  }

  getCreatingPlan(userId:number) {
    console.log("heyy")
    if (localStorage.getItem('creatingPlans')) {
      var plan = localStorage.getItem('creatingPlans') as string;
      return plan;
    }
    return false;
  }

  setCreatingPlan(json : string){
    localStorage.setItem('creatingPlans', json);
  }
}
