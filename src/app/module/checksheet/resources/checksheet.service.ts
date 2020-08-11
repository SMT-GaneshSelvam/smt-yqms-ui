import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { FilterData } from '../checksheets.component';
@Injectable({
  providedIn: 'root'
})

export class ChecksheetService {
 
  constructor(private _http: HttpClient) { }

  public filterData: FilterData = new FilterData([],[],[],[],[],[],[],[],[],[],[],[],[]);

  public commonPOSTCall(url, data) {
    return this._http.post(url, this.filterData);
  }

  public commonGETCall(url) {
    return this._http.get(url);
  }

  public commonPUTCall(url, data) {
    return this._http.put(url, data);
  }

  public commonDELETECall(url) {
    return this._http.delete(url);
  }

  public getAllChecksheets() {
    let url = AppSettingsModule.getAllChecksheets;
    return this._http.get(url);
  }

  public getAllUnits() {
    let url = AppSettingsModule.unit;
    return this._http.get(url)
  }

  public getAllSystems() {
    let url = AppSettingsModule.getAllSystems;
    return this._http.get(url)
  }  

  public getSystemsByUnit(unit) {
    let url = AppSettingsModule.getSystemsByUnit + "?unitRef=" + unit;
    return this._http.get(url)
  }

  public getSubSystemsByUnitAndSystem(unit,system) {
    let url = AppSettingsModule.getSubSystemsBySystem + "?unitRef=" + unit + "&systemRef=" + system;
    return this._http.get(url)
  }
  
  public getAllLocations() {
    let url = AppSettingsModule.getAllLocations;
    return this._http.get(url)
  }  
  
  public getAreasByLocation(location) {
    let url = AppSettingsModule.getAreasByLocation + "?locationList=" + location;
    return this._http.get(url)
  } 

  public getSubAreasByLocationAndArea(location, area) {
    let url = AppSettingsModule.getSubAreasByLocationAndArea + "?locationList=" + location + "&areaList="+area;
    return this._http.get(url)
  }
  
  public getAllContractors() {
    let url = AppSettingsModule.getAllContractors;
    return this._http.get(url)
  } 

  public getAllTypes() {
    let url = AppSettingsModule.getAllTypes;
    return this._http.get(url)
  } 

  public getAllTagGroups() {
    let url = AppSettingsModule.getAllTagGroups;
    return this._http.get(url)
  } 

  public getAllCheckSheetTypes() {
    let url = AppSettingsModule.getAllCheckSheetTypes;
    return this._http.get(url)
  } 

  public getAllDisciplines() {
    let url = AppSettingsModule.getAllDisciplines;
    return this._http.get(url)
  } 

  public getAllCheckSheetRefs() {
    let url = AppSettingsModule.getAllCheckSheetRefs;
    return this._http.get(url)
  } 

  public getSubTypesByType(type) {
    let url = AppSettingsModule.getSubTypesByType + "?typeList=" + type;
    return this._http.get(url)
  } 

}
