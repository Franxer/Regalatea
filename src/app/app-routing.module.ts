import { PrincipalComponent } from './layout/privado/principal/principal/principal.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from './layout/publico/register/register.component';
import { LoginComponent } from './layout/publico/login/login/login.component';
import { UserlistComponent } from './layout/privado/userlist/userlist.component';

const routes: Routes = [
  {path: '', component:PrincipalComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'user', component:UserlistComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
