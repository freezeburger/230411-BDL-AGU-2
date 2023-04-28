import { Observable } from "rxjs";
import { BdlCredentials } from "./bdl-credentials";

export enum AuthResponseCode {
  SUCCESS,
  FAILURE,
  INVALID_CREDENTIALS,
  DEVELOPMENT
}

export interface AuthResponse {
  code:AuthResponseCode;
  message:string;
}

export interface BdlAuthentificationService {

  connect( credentials:BdlCredentials ):Observable<AuthResponse>;

}
