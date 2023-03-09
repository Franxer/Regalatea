import { FirestoreMethodsService } from './../../services/firestore-methods.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import User from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: FormGroup;
  loading: boolean = false;
  userbbdd: User;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firestoremethods: FirestoreMethodsService,
    private firebaseError: FirebaseCodeErrorService){
      this.userbbdd = {email: ""};
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
        if(user.user.email != undefined){
          this.userbbdd.email = user.user.email;
          let response = this.firestoremethods.addUserRegistry(this.userbbdd);
          console.log(response);
        }
        this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/verify-email'])
      }
    }).catch((error) =>{
      console.log(error);
      this.toastr.error(this.firebaseError.printCodeError(error.code), "Error");
    })
  }

  ngOnInit(): void{
    this.firestoremethods.getUsers().subscribe(users => {
      console.log(users);
    })
  }
}
