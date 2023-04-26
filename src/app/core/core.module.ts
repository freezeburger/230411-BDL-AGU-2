import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { NotificationService } from './services/notification.service';
import { UI_NOTIFICATION_SERVICE } from 'bdl';

@NgModule({
  providers: [
    AuthService,
    NotificationService,
    MessageService,
    {
      provide:UI_NOTIFICATION_SERVICE,
      useExisting:NotificationService
    }
  ]
})
export class CoreModule { }
