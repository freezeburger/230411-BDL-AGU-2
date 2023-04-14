import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';

@NgModule({
  providers: [
    AuthService,
    MessageService
  ]
})
export class CoreModule { }
