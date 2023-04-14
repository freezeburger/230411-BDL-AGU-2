import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { NotificationService } from './services/notification.service';

@NgModule({
  providers: [
    AuthService,
    NotificationService,
    MessageService
  ]
})
export class CoreModule { }
