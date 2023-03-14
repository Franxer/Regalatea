import { FirestoreMethodsService } from 'src/app/services/firestore-methods.service';
import { Component } from '@angular/core';
import User from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  users: User[];

  constructor(private fms: FirestoreMethodsService){
    this.users = [{
      email: "test"
    }]
  }

  ngOnInit(): void{
    //PRUEBA OBTENER TODOS LOS USUARIOS DE LA BASE DE DATOS
    this.fms.getAllUsers().subscribe(users => {
      console.log(users);
    })
  }
}
