import { Injectable } from '@angular/core';
import { AuthResponse, AuthResponseCode, BdlAuthentificationService } from '../interfaces/bdl-authentification-service';
import { Observable, of } from 'rxjs';
import { BdlCredentials } from '../interfaces/bdl-credentials';

@Injectable()
export class BdlAuthService implements BdlAuthentificationService {

  connect(credentials: BdlCredentials): Observable<AuthResponse> {
    console.table( credentials );
    return of({
      code: AuthResponseCode.DEVELOPMENT,
      message: 'Not Implemented'
    })
  }

}
