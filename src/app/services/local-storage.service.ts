import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(
    private router: Router,
    private readonly notificationsService: TuiNotificationsService
  ) {}

  getCurrentUserId() {
    return JSON.parse(localStorage.getItem('userId') as string);
  }

  setCurrentUserId(id: string) {
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
      this.notificationsService
        .show('Something has gone wrong, please log-in or register', {
          status: TuiNotification.Error,
        })
        .subscribe();
      this.router.navigateByUrl('/');
    }
  }

  removeUserId() {
    localStorage.removeItem('userId');
  }

  storeUserSubInfo() {
    return true;
  }

  getCreatingPlan(userId: string) {
    if (localStorage.getItem('creatingPlans')) {
      var plan = localStorage.getItem('creatingPlans') as string;
      return plan;
    }
    return false;
  }

  setCreatingPlan(json: string) {
    localStorage.setItem('creatingPlans', json);
  }

  getCreatingStepsNumber(): number {
    if (localStorage.getItem('creatingSteps')) {
      let d = JSON.parse(localStorage.getItem('creatingSteps') as string);
      return d.length;
    }
    return 0;
  }

  getCreatingSteps() {
    if (localStorage.getItem('creatingSteps')) {
      let d = JSON.parse(localStorage.getItem('creatingSteps') as string);
      return d;
    }
    return undefined;
  }

  setCreatingStep(newStep: { [key: string]: any }) {
    if (localStorage.getItem('creatingSteps')) {
      console.log(newStep);
      let d = JSON.parse(localStorage.getItem('creatingSteps') as string);
      let found = false;
      for (let dic of d) {
        if (newStep['planWeek'] == dic['planWeek']) {
          found = true;
          (dic['title'] = newStep['title']),
            (dic['subtitle'] = newStep['subtitle']),
            (dic['materials'] = newStep['materials']);
        }
      }
      if (!found) {
        d.push(newStep);
      }
      localStorage.setItem('creatingSteps', JSON.stringify(d));
    } else {
      localStorage.setItem('creatingSteps', JSON.stringify([newStep]));
    }
  }

  getCreatingStep(num: number) {
    if (localStorage.getItem('creatingSteps')) {
      let d = JSON.parse(localStorage.getItem('creatingSteps') as string);
      for (let dic of d) {
        if (num == dic['planWeek']) {
          return dic;
        }
      }
    }
    return false;
  }

  freeCreatingPlanAndSteps() {
    localStorage.removeItem('creatingSteps');
    localStorage.removeItem('creatingPlans');
  }

  getMaterialIndex() {
    if (localStorage.getItem('materialIndex')) {
      return JSON.parse(localStorage.getItem('materialIndex') as string);
    } else {
      return -1;
    }
  }

  setMaterialIndex(val: number) {
    localStorage.setItem('materialIndex', JSON.stringify(val));
  }

  removeMaterialIndex() {
    localStorage.removeItem('materialIndex');
  }

  emptyUnusefulInfos(){
    this.removeMaterialIndex();
    localStorage.removeItem('creatingSteps');
  }

  setToken(token: string){
    localStorage.setItem('token', JSON.stringify(token));
  }

  removeToken(){
    localStorage.removeItem('token');
  }

  getToken() {
    if (localStorage.getItem('token')) {
      return JSON.parse(localStorage.getItem('token') as string);
    } else {
      return null;
    }
  }
}
