import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BdlMessage } from '../interface/bdl-message';
import { HttpClient } from '@angular/common/http';
import { ReactiveService } from '../interface/react-servvice';
import { BdlMessageCollection } from '../interface/bdl-message-collection';

export enum MessageCommandType {
  LOAD,
  REFRESH,
  SEND
}

@Injectable()
export class MessageService implements ReactiveService<BdlMessageCollection, MessageCommandType> {

  /**
  * Observable
  *
  * factory
  * Subject - Valeurs APRES subscription
  * BehaviorSubject - Valeurs APRES subscription ET dernière valeur AVANT
  * ReplaySubject - Valeurs APRES subscription ET TOUTES valeurs AVANT
  */

  // public messages$ = new BehaviorSubject<BdlMessage[]>([]);

  public data$ = new BehaviorSubject<BdlMessage[]>([]);

  public execute(command: MessageCommandType.SEND, payload: Pick<BdlMessage, 'text'>): void;
  public execute(command: MessageCommandType.REFRESH, payload: null ): void;
  public execute(command: MessageCommandType.LOAD, payload: null): void;
  public execute(command: MessageCommandType, payload: any): void {
    switch (command) {

      case MessageCommandType.LOAD:
         this.getData();
         return;

      case MessageCommandType.SEND:
        this.sendData(payload);
        return;

      default:
        return;
    }
  }

  constructor(
    private http: HttpClient
  ) {
    setInterval(() => this.getData(), 3000)
  }


  private API = 'http://localhost:5050/messages';
  private getData() {
    this.http.get<BdlMessage[]>(this.API)
      .subscribe(data => this.data$.next(data.reverse()));
  }

  private sendData(message = { text: 'Default Text', date: Date.now() }) {

    message.date = Date.now();

    this.http.post<BdlMessage>(this.API, message)
      .subscribe(data => this.data$.next([data, ...this.data$.value]));
  }
}
