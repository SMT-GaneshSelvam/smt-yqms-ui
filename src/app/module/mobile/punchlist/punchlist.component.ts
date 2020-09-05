import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-punchlist',
  templateUrl: './punchlist.component.html',
  styleUrls: ['./punchlist.component.scss']
})
export class PunchlistComponent implements OnInit {
  parameter: number;

  punchListVisible = false

  constructor(
      private bsModalRef: BsModalRef,
      private translateService: TranslateService
  ) {
  }

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


  ngOnInit() {
    this.punchList = this.punchLists[1];
  }

  confirm() {
      // do stuff
      this.close();
  }

  close() {
      this.bsModalRef.hide();
  }

  showPunchList(checkIndex){
    this.punchListVisible = true;
    
  }

}

export class punch {
  constructor(
    public id: number,
    public description: string,
    public typeCode: string,
    public category: string,
    ) { }
}
