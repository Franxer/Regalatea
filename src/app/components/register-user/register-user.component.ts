import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  registerUser: FormGroup

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService){
    this.registerUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    })
  }

  registrar(){
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const repeatPassword = this.registerUser.value.repeatPassword;

    this.afAuth.createUserWithEmailAndPassword(email, password).then((user)=> {
      console.log(user);
    }).catch((error) => {
      console.log(error);
      alert(this.firebaseError(error.code));
    })
  }

  firebaseError(code:string){
    switch(code){
      case 'auth/email-already-exists':
        return "El usuario ya existe";

      case 'auth/invalid-email':
        return "El email no es válido";

      case 'auth/weak-password':
        return "La contraseña es demasiado débil";

      case 'auth/invalid-password':
        return "La contraseña no es válida";

      default:
        return "Error desconocido";
    }
  }
}
