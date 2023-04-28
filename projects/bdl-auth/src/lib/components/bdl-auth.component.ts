import { Component, Inject, Optional, Input, Output, EventEmitter } from '@angular/core';
import { BdlAuthentificationService } from '../interfaces/bdl-authentification-service';
import { TOKEN_DEFAULT_AUTH_SERVICE } from '../tokens/default-auth-service.tokens';
import { TOKEN_AUTH_SERVICE } from '../tokens/auth-service.tokens';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BdlCredentials } from '../interfaces/bdl-credentials';
import { switchMap, tap } from 'rxjs';
import { AbstractControl } from '@angular/forms';

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
    @Optional() @Inject(TOKEN_AUTH_SERVICE) externalService: BdlAuthentificationService,
    private fb: FormBuilder
  ) {
    this.effectiveService = externalService || defaultService;
    // X
    this.authForm.valueChanges.subscribe(value => this.credentialsChange.next(value as BdlCredentials))
  }

  validateBdl: ValidatorFn = (control: AbstractControl) => {

    if (control.value.includes('@bdl.lu')) return null; // VALID
    return { bdlError: "Invalid User name " } // INVALID
  }

  authForm = this.fb.group(
    {
      email: [this.credentials.email, [Validators.required, this.validateBdl ] ],
      password: [this.credentials.password, [ Validators.required ] ]
    }
  )

  /*  authForm = new FormGroup({
     email: new FormControl(this.credentials.email, [Validators.required, this.validateBdl ]),
     password: new FormControl(this.credentials.password, [Validators.required]),
   }); */

  auth() {
    this.effectiveService.connect(this.authForm.value as BdlCredentials).subscribe(
      () => this.authEvent.next(this.authForm.value as BdlCredentials)
    );
  }





}
