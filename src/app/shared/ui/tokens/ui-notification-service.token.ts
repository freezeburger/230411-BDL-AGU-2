import { InjectionToken } from "@angular/core";
import { BdlNotification } from "src/app/core/interface/bdl-notification";
import { ReactiveService } from "src/app/core/interface/react-servvice";
import { NotificationCommandType } from "src/app/core/services/notification.service";

export type UICompliantNotificationService = ReactiveService<BdlNotification[], NotificationCommandType>

export const UI_NOTIFICATION_SERVICE = new InjectionToken<UICompliantNotificationService>('UI_NOTIFICATION_SERVICE');
