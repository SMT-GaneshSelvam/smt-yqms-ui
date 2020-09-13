import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor() { }

  public punchListMap : Map<number, Punch[]> = new Map<number, Punch[]>();


  
}

export class Punch {
  constructor(
    public punchNo: number,
    public description: string,
    public typeCode: string,
    public category: string,
  ) { }
}

export class Check {
  constructor(
    public group: string,
    public lineNo: number,
    public description: string,
    public yes: Boolean,
    public no: Boolean,
    public na: Boolean) { }
}

