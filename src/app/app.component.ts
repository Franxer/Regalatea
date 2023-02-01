import { Component } from '@angular/core';
import { AuthenticationService } from './shared/servicios/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Regalatea';

  constructor(private _authenService:AuthenticationService){

  }

  public loginChecked():boolean{
    return this._authenService.getLoginCheck();
  }
}
