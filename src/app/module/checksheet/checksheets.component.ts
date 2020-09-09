import { Component, OnInit, ViewChild } from '@angular/core';
import { CheetsheetsGridComponent } from './cheetsheets-grid/cheetsheets-grid.component';
import { HttpService } from 'src/app/core/services/http.service';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ChecksheetService } from './resources/checksheet.service';

@Component({
  selector: 'app-checksheets',
  templateUrl: './checksheets.component.html',
  styleUrls: ['./checksheets.component.scss']
})
export class ChecksheetsComponent implements OnInit {

  @ViewChild(CheetsheetsGridComponent) cheetsheetsGridComponent: CheetsheetsGridComponent;

  constructor(private httpService: HttpService, private checksheetService: ChecksheetService) { }

  public data: any[] = [];

  /*   = [
      {
        text: 'Entire Project', items: [
          { text: 'Allan - Allan FPSO', items: [{ text: '01 - General Equipments Layout' }, { text: 'Chair' }] },
          { text: 'Pre-Engneering', items: [{ text: 'Table' }, { text: 'Chair' }] },
          { text: 'HEL - Helang FPSO', items: [{ text: 'Table' }, { text: 'Chair' }] },
          { text: 'Riser & Well Topside', items: [{ text: 'Table' }, { text: 'Chair' }] },
          { text: 'Metering Skid', items: [{ text: 'Table' }, { text: 'Chair' }] },
          { text: 'Gas Treatment', items: [{ text: 'Table' }, { text: 'Chair' }] },
          { text: 'Gas Compression', items: [{ text: 'Table' }, { text: 'Chair' }] }
        ]
      }
    ]; */

  ngOnInit() {

    this.httpService.get(AppSettingsModule.unit).subscribe((data: any) => {

      this.data = data;


    },
      (err) => {
      });
  }

  public hasChildren = (item: any) => 'id' in item;

  public fetchChildren = (item: any) => this.checksheetService.getSystemsByUnit(item.id);

  onSubmit() {
    this.cheetsheetsGridComponent.getAllChecksheetsAgGrid(10);
  }

  public expandedKeys: any[] = [];

}

