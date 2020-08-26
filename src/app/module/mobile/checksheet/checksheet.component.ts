import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checksheet',
  templateUrl: './checksheet.component.html',
  styleUrls: ['./checksheet.component.scss']
})
export class ChecksheetComponent implements OnInit {

  punchListVisible = false

  checks = [
    new check(1, 'Windstorm'),
  ];

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

  cursor = 1;

  totalChecks = [
    new check(1, 'Windstorm'),
    new check(2, 'Bombasto'),
    new check(3, 'Magneta'),
    new check(4, 'Tornado')
  ];

  constructor() { }

  ngOnInit() {
  }

  pushNext(){
    this.checks.push(this.totalChecks[this.cursor++]);
  }

  showPunchList(checkIndex){
    this.punchListVisible = true;
    this.punchList = this.punchLists[checkIndex];
  }

}

export class check {
  constructor(
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
