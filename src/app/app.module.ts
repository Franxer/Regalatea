import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './layout/publico/login/login/login.component';
import { PrincipalComponent } from './layout/privado/principal/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
