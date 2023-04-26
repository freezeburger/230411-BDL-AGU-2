export interface BdlNotification {
  level:BdlNotificationLevel;
  text:string;
}


export enum BdlNotificationLevel {
  INFO = 'info',
  WARNING = 'warning',
  SUCCESS = 'success',
}
