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