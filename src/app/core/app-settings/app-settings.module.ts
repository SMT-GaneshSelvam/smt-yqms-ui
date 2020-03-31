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
  public static getAllLocations = "http://localhost:8080/location";
  public static getAreasByLocation = "http://localhost:8080/area";  
  public static getSubAreasByLocationAndArea = "http://localhost:8080/subarea";  
  public static getAllContractors = "http://localhost:8080/contractor";

  public static getAllTypes = "http://localhost:8080/type";
  public static getAllTagGroups = "http://localhost:8080/taggroup";
  public static getAllCheckSheetTypes = "http://localhost:8080/checksheettype";
  public static getAllDisciplines = "http://localhost:8080/discipline";
  public static getAllCheckSheetRefs = "http://localhost:8080/checksheetref";
  public static getSubTypesByType = "http://localhost:8080/subtype";

}
