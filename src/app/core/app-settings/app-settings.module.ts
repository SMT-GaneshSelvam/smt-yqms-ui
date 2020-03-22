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
  public static getAllUnits =  "http://localhost:8080/unit";
  public static getAllSystems = "http://localhost:8080/system";
  public static getSubSystemsBySystem = "http://localhost:8080/subsystem";

}
