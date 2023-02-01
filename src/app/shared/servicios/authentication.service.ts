import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginchecked:boolean = false;

  constructor() { }

  public loginAuthentication (obj:any):boolean{
    this.loginchecked = obj.user == 'sam' && obj.password == '1234';
    return this.loginchecked;
  }

  public getLoginCheck (){
    return this.loginchecked;
  }
}
