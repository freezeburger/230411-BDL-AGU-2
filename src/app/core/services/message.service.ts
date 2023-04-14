import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BdlMessage } from '../interface/bdl-message';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {

   /**
   * Observable
   *
   * factory
   * Subject - Valeurs APRES subscription
   * BehaviorSubject - Valeurs APRES subscription ET dernière valeur AVANT
   * ReplaySubject - Valeurs APRES subscription ET TOUTES valeurs AVANT
   */

  public messages$ = new BehaviorSubject<BdlMessage[]>([]);

  constructor(
    private http:HttpClient
  ) {
    setInterval( () => this.getData() , 3000 )
  }

  private API = 'http://localhost:5050/messages';
  public getData(){
    this.http.get<BdlMessage[]>(this.API)
             .subscribe( data => this.messages$.next(data.reverse()) );
  }

  public sendData( message = { text:'Default Text', date:Date.now() } ){
    this.http.post(this.API, message )
             .subscribe( data => this.messages$.next([data,...this.messages$.value]) );
  }
}
