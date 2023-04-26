import { Injectable } from '@angular/core';
import { ReactiveService } from '../interface/react-servvice';
import { BdlUser } from '../interface/bdl-user';
import { BehaviorSubject } from 'rxjs';
import { BdlCredentials } from '../interface/bdl-credentials';

export interface AuthDataType extends BdlUser{}

export enum AuthCommandType {
 REGISTER,
 CONNECT,
 DISCONNECT
}

@Injectable()
export class AuthService implements ReactiveService< AuthDataType | null, AuthCommandType >{

  constructor() { }
  data$ = new BehaviorSubject<AuthDataType  | null >( null );

  execute(command: AuthCommandType.REGISTER, payload: Omit<AuthDataType, 'id'> ): void
  execute(command: AuthCommandType.CONNECT, payload: BdlCredentials): void
  execute(command: AuthCommandType.DISCONNECT, payload: null): void
  execute(command: AuthCommandType, payload: any): void {
   console.log(command, payload)
  }
}
