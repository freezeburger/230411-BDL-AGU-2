import { Component, Inject, Optional, Input, Output, EventEmitter } from '@angular/core';
import { BdlAuthentificationService } from '../interfaces/bdl-authentification-service';
import { TOKEN_DEFAULT_AUTH_SERVICE } from '../tokens/default-auth-service.tokens';
import { TOKEN_AUTH_SERVICE } from '../tokens/auth-service.tokens';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BdlCredentials } from '../interfaces/bdl-credentials';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'bdl-auth',
  templateUrl: `./bdl-auth.component.html`,
  styles: [
  ]
})
export class BdlAuthComponent {

  @Input() credentials: BdlCredentials = {
    email: '',
    password: ''
  }
  @Output() credentialsChange = new EventEmitter<BdlCredentials>();

  @Output() authEvent = new EventEmitter<BdlCredentials>();

  effectiveService!: BdlAuthentificationService;

  constructor(
    @Inject(TOKEN_DEFAULT_AUTH_SERVICE) defaultService: BdlAuthentificationService,
    @Optional() @Inject(TOKEN_AUTH_SERVICE) externalService: BdlAuthentificationService
  ) {
    this.effectiveService = externalService || defaultService;
    this.authForm.valueChanges.subscribe(value => this.credentialsChange.next(value as BdlCredentials))
  }

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  auth() {
    this.effectiveService.connect(this.authForm.value as BdlCredentials).subscribe(
      () => this.authEvent.next(this.authForm.value as BdlCredentials)
    );
  }



}
