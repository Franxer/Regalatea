
//COMPONENTES
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginComponent } from './components/login/login.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { TestComponent } from './components/test/test.component';
import { ProfilePublicComponent } from './components/profile/profile-public/profile-public.component';
import { ProfilePrivateComponent } from './components/profile/profile-private/profile-private.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShopComponent } from './components/shop/shop.component';

//MODULOS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';





const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  { path: 'login', component: LoginComponent,                              canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard }},
  { path: 'register', component: RegisterUserComponent,                    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard }},
  { path: 'recover-pass', component: RecoverPasswordComponent,             canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard }},
  { path: 'dashboard', component: DashboardComponent,                      canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'verify-email', component: VerifyEmailComponent,                 canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard }},
  { path: 'profile/public', component: ProfilePublicComponent,             canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'profile/private', component: ProfilePrivateComponent,           canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'userlist', component: UserListComponent,                        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'settings', component: SettingsComponent,                        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'wishlist', component: WishlistComponent,                        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'shop', component: ShopComponent,                        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'test', component: TestComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
