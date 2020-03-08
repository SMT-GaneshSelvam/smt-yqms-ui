import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './landing-page/login/login.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModuleModule { }
