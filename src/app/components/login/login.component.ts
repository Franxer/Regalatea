import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

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
    private firebaseError: FirebaseCodeErrorService){
      this.loginUser = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      })
    }

  login(){
    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;

    console.log(email, password);
    this.afAuth.signInWithEmailAndPassword(email,password).then((user) =>{
      if(user.user?.emailVerified){
        this.loading = true;
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
