import { Component, HostListener, inject } from '@angular/core';
import { NotificationCommandType, NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-ui-notification',
  templateUrl: './ui-notification.component.html',
  styleUrls: ['./ui-notification.component.scss']
})
export class UiNotificationComponent {

  public notification = inject(NotificationService);

  @HostListener('window:keyup.alt.c')
  clear() {
    this.notification.execute(NotificationCommandType.CLEAR, null)
  }

}
