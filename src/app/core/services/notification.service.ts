import { Injectable } from '@angular/core';
import { ReactiveService } from '../interface/react-servvice';
import { BdlNotification, BdlNotificationLevel } from '../interface/bdl-notification';
import { BehaviorSubject } from 'rxjs';

export enum NotificationCommandType{
  NOTIFY,
  CLEAR
}

@Injectable()
export class NotificationService implements ReactiveService<BdlNotification[], NotificationCommandType> {

  public data$ = new BehaviorSubject<BdlNotification[]>([]);

  public execute(command: NotificationCommandType.CLEAR, payload: null): void;
  public execute(command: NotificationCommandType.NOTIFY, payload: BdlNotification): void;
  public execute(command: NotificationCommandType, payload: BdlNotification | null ): void {

      switch (command) {
        case NotificationCommandType.CLEAR:
        this.clear();
        return;

        case NotificationCommandType.NOTIFY:
          const notification = this.checkPayload(payload);
          this.notify(notification);
          return;
      }
  }

  private checkPayload(notification:BdlNotification | null ): BdlNotification{
    if(notification !== null ) return notification;
    return {level:BdlNotificationLevel.INFO, text:'' }
  }

  private clear(){
    this.data$.next([])
  }

  private notify( notification:BdlNotification){
    this.data$.next([notification, ...this.data$.value])
  }

}
