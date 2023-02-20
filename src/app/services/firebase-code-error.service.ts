import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  printCodeError(code:string){
    switch(code){
      //EL CORREO YA EXISTE
      case FirebaseCodeErrorEnum.EmailAlreadyExists:
        return "El usuario ya existe";
      //EL CORREO ESTÁ EN USO
      case FirebaseCodeErrorEnum.EmailAlreadyinUse:
        return "El usuario ya existe"
      //CORREO INVÁLIDO (REGISTRO)
      case FirebaseCodeErrorEnum.EmailInvalid:
        return "El email no es válido";
      //CORREO INVÁLIDO (LOGIN)
      case FirebaseCodeErrorEnum.EmailNotFound:
        return "El email no es válido";
      //FALTA EL EMAIL
      case FirebaseCodeErrorEnum.EmailMissing:
        return "El email es requerido";
      //CONTRASEÑA DÉBIL
      case FirebaseCodeErrorEnum.PassWeak:
        return "La contraseña es demasiado débil";
      //CONTRASEÑA INVÁLIDA (REGISTRO)
      case FirebaseCodeErrorEnum.PassInvalid:
        return "La contraseña no es válida";
      //CONTRASEÑA INVÁLIDA (LOGIN)
      case FirebaseCodeErrorEnum.PassWrong:
        return "La contraseña no es correcta";

      default:
        return "Error desconocido";
    }
  }
}
