import { NgModule } from '@angular/core';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './page-login.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageLoginComponent
  ],
  imports: [
    SharedModule,
    PageLoginRoutingModule
  ]
})
export class PageLoginModule { }
