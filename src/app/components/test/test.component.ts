import { FirestoreMethodsService } from 'src/app/services/firestore-methods.service';
import { Component } from '@angular/core';
import User from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  /* mapusers: Map<string, User> = new Map<string, User>(); */

  userList: User[] = [];

  constructor(private fms: FirestoreMethodsService){}

  ngOnInit(): void{
    //PRUEBA OBTENER TODOS LOS USUARIOS DE LA BASE DE DATOS
    this.fms.getAllUsers().subscribe(users => {
      users.forEach((doc) => {
        this.userList.push(doc)
        console.log(`${doc.email} => ${doc}`);
      })
      console.log(users);
    })
  }
}
