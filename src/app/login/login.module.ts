import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CommonuiModule } from 'commonui';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonuiModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule { }
