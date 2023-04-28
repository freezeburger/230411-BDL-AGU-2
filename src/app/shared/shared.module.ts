import { NgModule } from '@angular/core';
import { UtilsModule } from './utils/utils.module';
import { NgImportModule } from './ng-import.module';
import { BdlModule } from 'bdl';
import { BdlAuthModule } from 'projects/bdl-auth/src/lib/bdl-auth.module';

@NgModule({
  exports: [
    BdlModule,
    UtilsModule,
    NgImportModule,
    BdlAuthModule
  ]
})
export class SharedModule { }
