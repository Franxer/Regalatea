import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {

  recoverPassword: FormGroup;
  loading: boolean = false

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService){
      this.recoverPassword = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      })
    }

  recover(){
    const email = this.recoverPassword.value.email;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.loading = true;
      this.toastr.info('Correo enviado para restablecer su contraseña',"Recuperar Contraseña")
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError.printCodeError(error.code), "Error");
    });
  }
}
