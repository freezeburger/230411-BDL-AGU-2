import { InjectionToken } from "@angular/core";
import { BdlReactiveService } from "../../interfaces/bdl-reactive-servvice";
import { BdlNotification } from "../../interfaces/bdl-notification";
import { BdlNotificationCommandType } from "../../enums/bdl-notification-type.enum";

export type UICompliantNotificationService = BdlReactiveService<BdlNotification[], BdlNotificationCommandType>

export const UI_NOTIFICATION_SERVICE = new InjectionToken<UICompliantNotificationService>('UI_NOTIFICATION_SERVICE');
