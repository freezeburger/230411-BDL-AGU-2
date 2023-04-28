import { Injectable } from '@angular/core';
import { AuthResponse, AuthResponseCode, BdlAuthentificationService, BdlCredentials } from 'projects/bdl-auth/src/public-api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthDelegateService implements BdlAuthentificationService{

  connect(credentials: BdlCredentials): Observable<AuthResponse> {
   console.log('Application' , credentials);

    return of({
      code: AuthResponseCode.DEVELOPMENT,
      message: 'From Master Application'
    })
  }

}
