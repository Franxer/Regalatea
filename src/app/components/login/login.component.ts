import { FirestoreMethodsService } from 'src/app/services/firestore-methods.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import User from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUser: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private fms: FirestoreMethodsService){
      this.loginUser = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      })
    }

  login(){
    var userToLog: User = {
      email: this.loginUser.value.email
    }
    const password = this.loginUser.value.password;

    console.log(userToLog.email, password);
    this.afAuth.signInWithEmailAndPassword(userToLog.email,password).then((user) =>{
      if(user.user?.emailVerified){
        this.loading = true;
        this.fms.addUserRegistry(userToLog);
        console.log(user);
        this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/verify-email'])
      }
    }).catch((error) =>{
      console.log(error);
      this.toastr.error(this.firebaseError.printCodeError(error.code), "Error");
    })
  }
}
