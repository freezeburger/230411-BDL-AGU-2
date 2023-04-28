import { NgModule } from '@angular/core';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationService } from 'src/app/core/services/notification.service';

@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    SharedModule,
    PageHomeRoutingModule
  ]
})
export class PageHomeModule { }
