import { NgModule } from '@angular/core';
import { UtilsModule } from './utils/utils.module';
import { NgImportModule } from './ng-import.module';
import { BdlModule } from 'bdl';

@NgModule({
  exports: [
    BdlModule,
    UtilsModule,
    NgImportModule
  ]
})
export class SharedModule { }
