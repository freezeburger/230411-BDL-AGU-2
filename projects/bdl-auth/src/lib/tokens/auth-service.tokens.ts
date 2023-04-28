import { InjectionToken } from "@angular/core";
import { BdlAuthentificationService } from "../interfaces/bdl-authentification-service";


export const TOKEN_AUTH_SERVICE = new InjectionToken<BdlAuthentificationService>('TOKEN_AUTH_SERVICE')
