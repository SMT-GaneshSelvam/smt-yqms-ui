import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CheckSheetService } from '../resources/checksheet.service';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';

@Component({
  selector: 'app-punchlist',
  templateUrl: './punchlist.component.html',
  styleUrls: ['./punchlist.component.scss']
})
export class PunchlistComponent implements OnInit {
  parameter: number;
  public lineNo;
  public checkSheet;
  public description;


  constructor(
    private bsModalRef: BsModalRef,
    private translateService: TranslateService,
    private checksheetService: CheckSheetService
  ) {
  }

  punchList = [];



  ngOnInit() {

    this.checksheetService.commonGETCall(AppSettingsModule.punchListitem + this.checkSheet + "/" + this.lineNo).subscribe((data: any) => {

      data.forEach((item, index) => {
        this.punchList.push(new punch(item.punchNo, item.description, '', ''));
      });
    },
      (err) => {
      });
  }

  confirm() {
    this.close();
  }

  close() {
    this.bsModalRef.hide();
  }

}

export class punch {
  constructor(
    public punchNo: number,
    public description: string,
    public typeCode: string,
    public category: string,
  ) { }
}
