import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportService {


  public gridData = {};
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

  public changeOperation=(operation:any)=>{
    this.status.next(operation)
  }

}
