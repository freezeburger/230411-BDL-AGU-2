import { NgModule } from '@angular/core';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    SharedModule,
    PageHomeRoutingModule
  ]
})
export class PageHomeModule { }
