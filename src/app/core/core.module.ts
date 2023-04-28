import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { NotificationService } from './services/notification.service';
import { UI_NOTIFICATION_SERVICE } from 'bdl';
import { TOKEN_AUTH_SERVICE } from 'projects/bdl-auth/src/public-api';
import { AuthDelegateService } from './services/auth-delegate.service';

@NgModule({
  providers: [
    AuthService,
    NotificationService,
    MessageService,
    {
      provide:UI_NOTIFICATION_SERVICE,
      useExisting:NotificationService
    },
    {
      provide:TOKEN_AUTH_SERVICE,
      useClass:AuthDelegateService
    }
  ]
})
export class CoreModule { }
