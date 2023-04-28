import { Component , inject, SkipSelf } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  providers:[
    NotificationService
  ]
})
export class PageHomeComponent {

  constructor(
    notificationA:NotificationService,
    @SkipSelf() notificationB:NotificationService,
  ){

  }
}
