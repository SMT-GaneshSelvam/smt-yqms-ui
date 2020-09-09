import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
@Injectable({
  providedIn: 'root'
})

export class PunchlistService {
 
  constructor(private _http: HttpClient) { }

  public punchListFilterData: PunchListFilterData = new PunchListFilterData(undefined,[],[],[],[],[],[],[],[],[],[],[],[]);

  public commonPOSTCall(url, data) {
    return this._http.post(url, this.punchListFilterData);
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

  public getSubSystemsBySystem(system) {
    let url = AppSettingsModule.getSubSystemsBySystem + "?systemList=" + system;
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
  
  public getAllCategories() {
    let url = AppSettingsModule.getAllCategories;
    return this._http.get(url)
  } 

  public getAllDefectTypes() {
    let url = AppSettingsModule.getAllDefectTypes;
    return this._http.get(url)
  } 

  public getAllPriorities() {
    let url = AppSettingsModule.getAllPriorities;
    return this._http.get(url)
  } 

  public getAllDisciplines() {
    let url = AppSettingsModule.getAllDisciplines;
    return this._http.get(url)
  } 

  public getAllResponsibleGroups() {
    let url = AppSettingsModule.getAllResponsibleGroups;
    return this._http.get(url)
  } 

  public getAllWorkpackTypes() {
    let url = AppSettingsModule.getAllWorkpackTypes;
    return this._http.get(url)
  } 

  public getSubTypesByType(type) {
    let url = AppSettingsModule.getSubTypesByType + "?typeList=" + type;
    return this._http.get(url)
  } 

}

export class PunchListFilterData {
  constructor(
    public punchListNumber: number,
    public unit: Array<any>,
    public system: Array<any>,
    public subSystem: Array<any>,
    public location: Array<any>,
    public area: Array<any>,
    public subArea: Array<any>,
    public category: Array<any>,
    public defectType: Array<any>,
    public priority: Array<any>,
    public discipline: Array<any>,
    public responsibleGroup: Array<any>,
    public workpack: Array<any>,
  ) { }
}