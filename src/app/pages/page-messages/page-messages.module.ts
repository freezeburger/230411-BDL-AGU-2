import { NgModule } from '@angular/core';
import { PageMessagesRoutingModule } from './page-messages-routing.module';
import { PageMessagesComponent } from './page-messages.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageMessagesComponent
  ],
  imports: [
    SharedModule,
    PageMessagesRoutingModule
  ]
})
export class PageMessagesModule { }
