import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  public get(url) {
    return this._http.get(url);
  }

  public post(url, data) {
    return this._http.post(url, data);
  }

  public put(url, data) {
    return this._http.put(url, data);
  }

  public delete(url) {
    return this._http.delete(url);
  }

}
