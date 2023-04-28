import { NgModule } from '@angular/core';
import { BdlAuthComponent } from './components/bdl-auth.component';
import { BdlAuthService, TOKEN_DEFAULT_AUTH_SERVICE } from '../public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BdlAuthComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    BdlAuthComponent
  ],
  providers: [
    BdlAuthService,
    {
      provide: TOKEN_DEFAULT_AUTH_SERVICE,
      useExisting: BdlAuthService
    }
  ]
})
export class BdlAuthModule { }
