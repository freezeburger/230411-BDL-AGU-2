import { Component, HostListener, Inject, Optional, inject } from '@angular/core';
import { NotificationCommandType, NotificationService } from 'src/app/core/services/notification.service';
import { UICompliantNotificationService, UI_NOTIFICATION_SERVICE } from '../tokens/ui-notification-service.token';

@Component({
  selector: 'app-ui-notification',
  templateUrl: './ui-notification.component.html',
  styleUrls: ['./ui-notification.component.scss']
})
export class UiNotificationComponent {

  constructor(
    @Optional() @Inject(UI_NOTIFICATION_SERVICE) public notification:UICompliantNotificationService
  ){}

  @HostListener('window:keyup.alt.c')
  clear() {
    this.notification.execute(NotificationCommandType.CLEAR, null);
  }

}
