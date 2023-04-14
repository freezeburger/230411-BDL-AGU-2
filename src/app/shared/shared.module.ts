import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { UtilsModule } from './utils/utils.module';
import { NgImportModule } from './ng-import.module';

@NgModule({
  exports: [
    UiModule,
    UtilsModule,
    NgImportModule
  ]
})
export class SharedModule { }
