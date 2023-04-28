import { Component } from '@angular/core';
import { BdlCredentials } from 'projects/bdl-auth/src/public-api';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {
  initialCredentialsValues:BdlCredentials = {
    email:'user@bld.lu',
    password:''
  }
}
