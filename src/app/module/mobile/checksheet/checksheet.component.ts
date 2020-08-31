import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checksheet',
  templateUrl: './checksheet.component.html',
  styleUrls: ['./checksheet.component.scss']
})
export class ChecksheetComponent implements OnInit {

  punchListVisible = false

  checks: Array<any>;

  categories:Array<any> = [];

  totalCategories = ["IDENTIFICATION","INSTALLATION","ENVIRONMENT"];

  punchList = [];

  punchLists = [[
    new punch(1, 'desc1','typecode1','cate1'),
    new punch(2, 'desc2','typecode2','cate2'),
    new punch(3, 'desc3','typecode3','cate3'),
    new punch(4, 'desc4','typecode4','cate4')  
  ],[
    new punch(1, 'desc5','typecode1','cate1'),
    new punch(2, 'desc6','typecode2','cate2'),
    new punch(3, 'desc7','typecode3','cate3'),
    new punch(4, 'desc8','typecode4','cate4') 
  ],[
    new punch(1, 'desc9','typecode1','cate1'),
    new punch(2, 'desc10','typecode2','cate2'),
    new punch(3, 'desc11','typecode3','cate3'),
    new punch(4, 'desc12','typecode4','cate4') 
  ],[
    new punch(1, 'desc13','typecode1','cate1'),
    new punch(2, 'desc14','typecode2','cate2'),
    new punch(3, 'desc15','typecode3','cate3'),
    new punch(4, 'desc16','typecode4','cate4') 
  ]];

  categoryCursor = 0;
  cursor = 0;

  totalChecks = [
      new check("IDENTIFICATION", 0, ''),
      new check("IDENTIFICATION", 1, 'Equipment is clearly marked with acceptable Ex compliance plate.'),
      new check("IDENTIFICATION", 2, 'Equipment Gas Group and Temperature Class is correct for the Area'),
      new check("IDENTIFICATION", 3, 'Equipment Ex Technique appropriate for Area Classification'),
      new check("INSTALLATION", 0, ''),
      new check("INSTALLATION", 4, 'Installation in accordance with "conditions of use" on certificate (X on cert)'),
      new check("INSTALLATION", 5, 'Verify cable inner insulation has no " Cold Flow".'),
      new check("INSTALLATION", 6, 'Sealing gaskets or compounds on glasses/windows are satisfactory'),
      new check("INSTALLATION", 7, 'Equipotential Bonding appear to be satisfactory'),
      new check("ENVIRONMENT", 0, ''),
      new check("ENVIRONMENT", 8, 'Equipment protected against corrosion/weather/vibration/etc.'),
      new check("ENVIRONMENT", 9, 'No undue accumulation of dust and moisture.  '),
      new check("ENVIRONMENT", 10, 'Exd conduits seals are fitted to all conduits and satisfactorily sealed')
  ]


  constructor() { }

  ngOnInit() {
    this.checks = [];
   
    this.checks.push(this.totalChecks[this.cursor]);
    this.checks.push(this.totalChecks[++this.cursor]);
  }

  pushNext(){
    
    this.checks.push(this.totalChecks[++this.cursor]); 

    if((this.totalChecks[this.cursor].id==0)){
      this.checks.push(this.totalChecks[++this.cursor]); 
    }

  }

  showPunchList(checkIndex){
    this.punchListVisible = true;
    this.punchList = this.punchLists[checkIndex];
  }

}

export class check {
  constructor(
    public category: string,
    public id: number,
    public name: string) { }
}

export class punch {
  constructor(
    public id: number,
    public description: string,
    public typeCode: string,
    public category: string,
    ) { }
}
