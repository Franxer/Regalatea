import { Component } from '@angular/core';
import User from 'src/app/interfaces/User.interface';
import { FirestoreMethodsService } from 'src/app/services/firestore-methods.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

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
