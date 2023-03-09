import { FirestoreMethodsService } from './../../services/firestore-methods.service';
import { FirebaseCodeErrorService } from './../../services/firebase-code-error.service';
import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import User from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  registerUser: FormGroup;
  loading: boolean = false;
  usuario: User;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private firebaseError: FirebaseCodeErrorService,
    private firestoremethods: FirestoreMethodsService,
    private router: Router){
    this.usuario = {email: ""};
    this.registerUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required],
    })
  }

  registrar(){
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const repeatPassword = this.registerUser.value.repeatPassword;

    if((password != repeatPassword) || (password == "")){
      this.toastr.error("Las contraseñas no coinciden o no son válidas", "Error");
      return;
    }

    this.afAuth.createUserWithEmailAndPassword(email, password).then((user)=> {
      this.loading = true
      this.verifyEmail();
      console.log(user);
    }).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError.printCodeError(error.code), "Error");
    })
  }

  verifyEmail(){
    this.afAuth.currentUser.then((user) => user?.sendEmailVerification()).then(() =>{
      this.toastr.info('Le enviamos un correo para su verificación', 'Verificar Correo');
      this.router.navigate(['/login']);
    });
  }
}

