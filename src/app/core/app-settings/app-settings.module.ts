import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppSettingsModule { 

  public static getAllChecksheets =  "http://localhost:8080/checksheet";

}
