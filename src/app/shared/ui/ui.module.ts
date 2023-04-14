import { NgModule } from '@angular/core';
import { NgImportModule } from '../ng-import.module';
import { UiNavigationComponent } from './ui-navigation/ui-navigation.component';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { UiImageComponent } from './ui-image/ui-image.component';

@NgModule({
  declarations: [
    UiNavigationComponent,
    UiHeaderComponent,
    UiImageComponent
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    UiNavigationComponent,
    UiHeaderComponent,
    UiImageComponent
  ]
})
export class UiModule { }
