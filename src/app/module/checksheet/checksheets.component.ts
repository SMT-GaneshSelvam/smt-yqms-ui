import { Component, OnInit, ViewChild } from '@angular/core';
import { CheetsheetsGridComponent } from './cheetsheets-grid/cheetsheets-grid.component';
import { HttpService } from 'src/app/core/services/http.service';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ChecksheetService } from './resources/checksheet.service';
import { tap } from 'rxjs/operators';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-checksheets',
  templateUrl: './checksheets.component.html',
  styleUrls: ['./checksheets.component.scss']
})
export class ChecksheetsComponent implements OnInit {

  @ViewChild(CheetsheetsGridComponent) cheetsheetsGridComponent: CheetsheetsGridComponent;

  constructor(private httpService: HttpService, private checksheetService: ChecksheetService) { }

  public data: any[] = [];
  public expandedKeys: any[] = [];

  ngOnInit() {

    this.httpService.get(AppSettingsModule.unit).subscribe((data: any) => {

      this.data = data;
      this.data.forEach(u => {u.level = 1;});

    },
      (err) => {
      });
  }

  public hasChildren = (item: any) => 'id' in item && (item.level==1 || item.level==2);
  public fetchChildren = (item: any) => {
    console.log(item);
    if (item.level == 1) {
      return this.checksheetService.getSystemsByUnit(item.id).pipe(
        tap(systems => {
          systems.forEach(s => {
            s.level = 2;
            s.unit = item.id;
          });
        })
      );
    }
    else {
      return this.checksheetService.getSubSystemsByUnitAndSystem(item.unit, item.id).pipe(
        tap(subSystems => {
          subSystems.forEach(ss => {
            ss.level = 3;
            ss.system = item.id;
            ss.unit = item.unit;
          });
        }),
        take(1)
      );
    }
  }



  onSubmit() {
    this.cheetsheetsGridComponent.getAllChecksheetsAgGrid(10);
  }

  expand(){
    console.log("SMT");
    this.expandedKeys = this.data.slice();
  }

 

}

