import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  public status: BehaviorSubject<any> = new BehaviorSubject(null);
  public alertMessage: string = '';
  
  constructor(private _http: HttpClient) { }

  public commonPOSTCall(url, data) {
    return this._http.post(url, data);
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

  public changeOperation = (operation: any) => {
    this.status.next(operation)
  }

  public getUnitByID(unitId) {
    let url = AppSettingsModule.unit + "/" + unitId;
    return this._http.get(url)
  }

  /* public getAllQuestions() {
    let url = AppSettingsModule.getAllQuestions;
    return this._http.get(url);
  }
  public getQuestionByID(questionId) {
    let url = AppSettingsModule.updateSIPQuestions;
    return this._http.post(url,{sipQuestionId:questionId})
  }
  public getDisplayType() {
    let url = AppSettingsModule.getDisplayType;
    return this._http.get(url);
  }
  public getAllSipCategory() {
    let url = AppSettingsModule.getSipCategoryList;
    return this._http.get(url)
  }
  public getAllDatatypes() {
    let url = AppSettingsModule.getAllDatatypes;
    return this._http.get(url)
  } */

}
