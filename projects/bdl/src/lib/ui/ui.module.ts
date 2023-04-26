import { NgModule } from '@angular/core';
import { NgImportModule } from '../ng-import.module';
import { UiNavigationComponent } from './ui-navigation/ui-navigation.component';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { UiImageComponent } from './ui-image/ui-image.component';
import { UiNotificationComponent } from './ui-notification/ui-notification.component';

@NgModule({
  declarations: [
    UiNavigationComponent,
    UiHeaderComponent,
    UiImageComponent,
    UiNotificationComponent
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    UiNavigationComponent,
    UiHeaderComponent,
    UiImageComponent,
    UiNotificationComponent
  ]
})
export class UiModule { }
