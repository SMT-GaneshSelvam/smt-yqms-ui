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
  public static getAllPunchLists =  "http://localhost:8080/punchlist";
  public static getAllSystems = "http://localhost:8080/system";
  public static getSubSystemsBySystem = "http://localhost:8080/subsystem";
  public static getAllLocations = "http://localhost:8080/location";
  public static getAreasByLocation = "http://localhost:8080/area";  
  public static getSubAreasByLocationAndArea = "http://localhost:8080/subarea";  
  public static getAllContractors = "http://localhost:8080/contractor";  
  public static getAllCategories = "http://localhost:8080/category";
  public static getAllDefectTypes = "http://localhost:8080/defecttype";
  public static getAllPriorities = "http://localhost:8080/priority";  
  public static getAllResponsibleGroups = "http://localhost:8080/responsiblegroup";
  public static getAllWorkpackTypes = "http://localhost:8080/workpacktype";

  public static getAllTypes = "http://localhost:8080/type";
  public static getAllTagGroups = "http://localhost:8080/taggroup";
  public static getAllCheckSheetTypes = "http://localhost:8080/checksheettype";
  public static getAllDisciplines = "http://localhost:8080/discipline";
  public static getAllCheckSheetRefs = "http://localhost:8080/checksheetref";
  public static getSubTypesByType = "http://localhost:8080/subtype";
  
  public static unit = "http://localhost:8080/unit";
  public static location = "http://localhost:8080/location";
  public static type = "http://localhost:8080/type";
  public static discipline = "http://localhost:8080/discipline";
  public static tagGroup = "http://localhost:8080/taggroup";
  public static imporData = "http://localhost:8080/importdata";

}
