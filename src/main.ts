import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { PLATFORM_INITIALIZER } from '@angular/core';


platformBrowserDynamic(
  [{
    provide: PLATFORM_INITIALIZER,
    useValue: () => console.log('Angulat is about to start '),
    multi: true
  }]
)
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
