import { Component, HostListener, Inject, Optional } from '@angular/core';
import { UICompliantNotificationService, UI_NOTIFICATION_SERVICE } from '../tokens/ui-notification-service.token';
import { BdlNotificationCommandType } from '../../enums/bdl-notification-type.enum';

@Component({
  selector: 'bdl-ui-notification',
  templateUrl: './ui-notification.component.html',
  styleUrls: ['./ui-notification.component.scss']
})
export class UiNotificationComponent {

  constructor(
    @Optional() @Inject(UI_NOTIFICATION_SERVICE) public notification:UICompliantNotificationService
  ){}

  @HostListener('window:keyup.alt.c')
  clear() {
    this.notification.execute(BdlNotificationCommandType.CLEAR, null);
  }

}
