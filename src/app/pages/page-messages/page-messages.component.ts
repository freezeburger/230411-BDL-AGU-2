import { Component } from '@angular/core';
import { BdlMessage } from 'src/app/core/interface/bdl-message';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-page-messages',
  templateUrl: './page-messages.component.html',
  styleUrls: ['./page-messages.component.scss']
})
export class PageMessagesComponent {

  public viewMessages:BdlMessage[] = []

  constructor( public messageSrv:MessageService){
    this.messageSrv.messages$.subscribe( messages => this.viewMessages = messages)
  }


}
