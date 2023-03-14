import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.css']
})



export class HeaderDashboardComponent {

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
