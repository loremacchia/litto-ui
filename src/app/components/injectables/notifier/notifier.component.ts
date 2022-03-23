import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { Component, OnInit, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css'],
})
export class NotifierComponent { // Service to keep code simple and clean in notification phase

  constructor(private readonly notificationsService: TuiNotificationsService) { }

  notifySuccess(message:string){
    this.notificationsService
      .show(message, { status: TuiNotification.Success })
      .subscribe();
  }

  notifyError(message:string){
    this.notificationsService
      .show(message, { status: TuiNotification.Error })
      .subscribe();
  }
}
