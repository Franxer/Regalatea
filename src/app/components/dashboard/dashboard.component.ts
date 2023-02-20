import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataUser: any;

  ngOnInit(): void {
    this.afAuth.currentUser.then((user) => {
      console.log(user);
      if(user && user.emailVerified){
        this.dataUser = user;
      }else{
        this.router.navigate(['/login']);
      }
    })
  }

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router){}

  logOut(){
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
