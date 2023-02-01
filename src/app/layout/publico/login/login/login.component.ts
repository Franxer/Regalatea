import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private _authenservice:AuthenticationService
    ){ }

  ngOnInit(): void{
    this.myForm = this.createMyForm();
  }

  private modalchange:string = "#modalUnchecked";

  private createMyForm():FormGroup{
    return this.fb.group({
      user:['', Validators.required],
      password:['', Validators.required]
    });
  }

  private authenCheck():boolean{
    return this._authenservice.loginAuthentication(this.myForm.value);
  }

  public submitFormulario(){
    if(!this.myForm.invalid){
      console.log(this.myForm);
      this.modalchange = "#modalChecked";
    }else{
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      console.log(this.myForm);
    }
    if(!this.authenCheck()){
      alert("Datos inválidos");
    }
  }

  public get f():any{
    return this.myForm.controls;
  }
}
