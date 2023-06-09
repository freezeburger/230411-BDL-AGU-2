import { NgModule } from '@angular/core';
import { NgImportModule } from '../ng-import.module';
import { UiNavigationComponent } from './ui-navigation/ui-navigation.component';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { UiImageComponent } from './ui-image/ui-image.component';
import { UiNotificationComponent } from './ui-notification/ui-notification.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { InactiveDirective } from './directives/inactive.directive';
import { UiButtonOptionsComponent } from './ui-button-options/ui-button-options.component';
import { UiLayoutComponent } from './ui-layout/ui-layout.component';
import { UiLayoutContentComponent } from './ui-layout-content/ui-layout-content.component';
import { AsPageTitleDirective } from './directives/as-page-title.directive';
import { RevealMenuDirective } from './directives/reveal-menu.directive';

@NgModule({
  declarations: [
    UiNavigationComponent,
    UiHeaderComponent,
    UiImageComponent,
    UiNotificationComponent,
    UiButtonComponent,
    InactiveDirective,
    UiButtonOptionsComponent,
    UiLayoutComponent,
    UiLayoutContentComponent,
    AsPageTitleDirective,
    RevealMenuDirective
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    UiNavigationComponent,
    UiHeaderComponent,
    UiImageComponent,
    UiNotificationComponent,
    UiButtonComponent,
    InactiveDirective,
    UiButtonOptionsComponent,
    UiLayoutComponent,
    UiLayoutContentComponent,
    AsPageTitleDirective,
    RevealMenuDirective
  ]
})
export class UiModule { }
