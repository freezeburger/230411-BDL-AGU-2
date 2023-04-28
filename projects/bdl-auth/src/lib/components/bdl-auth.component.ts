import { Component, Inject, Optional } from '@angular/core';
import { BdlAuthentificationService } from '../interfaces/bdl-authentification-service';
import { TOKEN_DEFAULT_AUTH_SERVICE } from '../tokens/default-auth-service.tokens';
import { TOKEN_AUTH_SERVICE } from '../tokens/auth-service.tokens';
import { FormControl, FormGroup } from '@angular/forms';
import { BdlCredentials } from '../interfaces/bdl-credentials';

@Component({
  selector: 'bdl-auth-bdl-auth',
  templateUrl: `./bdl-auth.component.html`,
  styles: [
  ]
})
export class BdlAuthComponent {

  effectiveService!:BdlAuthentificationService;

  constructor(
    @Inject(TOKEN_DEFAULT_AUTH_SERVICE)  defaultService : BdlAuthentificationService,
    @Optional() @Inject(TOKEN_AUTH_SERVICE)  externalService : BdlAuthentificationService
  ){
    this.effectiveService = externalService || defaultService;
  }

  authForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  });

  auth(){
    this.effectiveService.connect( this.authForm.value as BdlCredentials)
  }
}
