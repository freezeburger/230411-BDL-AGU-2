import { Route } from "@angular/router";

export interface BdlRoute extends Route {
  title:string;
  data?:{
    linkLabel:String
  }
}

export type  BdlRoutes = BdlRoute[];
