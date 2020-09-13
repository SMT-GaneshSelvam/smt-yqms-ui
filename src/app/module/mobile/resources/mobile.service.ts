import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  punchLists:Array<Array<Punch>> = [[]];

  constructor() { }
  
}

export class Punch {
  constructor(
    public punchNo: number,
    public description: string,
    public typeCode: string,
    public category: string,
  ) { }
}