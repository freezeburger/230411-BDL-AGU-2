import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class NgImportModule { }
