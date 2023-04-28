import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BdlAuthComponent, BdlAuthModule } from 'projects/bdl-auth/src/public-api';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BdlAuthModule
  ]
})
export class AppModule implements DoBootstrap {

  constructor( private injector:Injector){}

  ngDoBootstrap(){
    const customElementDefinition= createCustomElement(BdlAuthComponent, { injector: this.injector });
    customElements.define('wc-auth', customElementDefinition )
  }
}
