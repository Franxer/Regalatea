//COMPONENTES
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginComponent } from './components/login/login.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { TestComponent } from './components/test/test.component';
import { ProfilePublicComponent } from './components/profile/profile-public/profile-public.component';
import { ProfilePrivateComponent } from './components/profile/profile-private/profile-private.component';

//MODULOS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterUserComponent},
  { path: 'recover-pass', component: RecoverPasswordComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'verify-email', component: VerifyEmailComponent},
  { path: 'test', component: TestComponent},
  { path: 'dashboard/profile', component: ProfilePublicComponent},
  { path: 'dashboard/profile/public', component: ProfilePublicComponent},
  { path: 'dashboard/profile/private', component: ProfilePrivateComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
