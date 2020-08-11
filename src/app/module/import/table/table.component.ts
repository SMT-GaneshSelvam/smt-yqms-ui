import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ImportService } from '../resources/import.service';
import * as XLSX from 'xlsx';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  @Input() table: String;
  @Input() glyphicon: String;
  @Output() dataImportedEvent = new EventEmitter<string>();

  count :any;

  requestBody = {};

  columnDefs: Array<any>;
  rowData : Array<any>;
  constructor(private router: Router, private importService: ImportService, private _cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.importService.commonGETCall(AppSettingsModule.recordCount+this.table).subscribe((data: any) => {
      this.count = data;
    },
      (err) => {

       this.count = 'No Data';

      }
    );

    this._cd.detectChanges();

  }

  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});

      console.log("SMT");
      console.log(jsonData);

      let tableName = '';
      for (var prop in jsonData) {
        tableName = prop;
      }

      for (const prop in jsonData[tableName]) {
        delete jsonData[tableName][prop]["__rowNum__"];
      }

      this.requestBody["tableName"] = tableName;
      this.requestBody["data"] = jsonData[tableName];
      for (const prop in this.requestBody["data"] ) {
        for (const prop2 in this.requestBody['data'][prop]) {
          this.requestBody['data'][prop][prop2] = this.requestBody['data'][prop][prop2].replace(/'/g, "\\\'");
        }
      }

      this.importData();

    }
    reader.readAsBinaryString(file);
  }

  importData() {
    this.importService.commonPOSTCall(AppSettingsModule.imporData, this.requestBody).subscribe((data: any) => {
      this.importService.changeOperation("added");

      this.columnDefs = new Array;
      this.rowData = new Array;

      for (const prop in data['data'][0]) {
        this.columnDefs.push({ headerName: prop, field: prop });

      }

      for (const prop in data['data']) {
        let obj = {};
        for (const prop2 in data['data'][prop]) {
          obj[prop2] = data['data'][prop][prop2];
        }
        this.rowData.push(obj);
      }

      console.log("SMT");
      console.log( this.columnDefs);
      console.log( this.rowData);

      this.importService.gridData['columnDefs'] = this.columnDefs;
      this.importService.gridData['rowData'] = this.rowData;

      this.dataImportedEvent.emit('Imported');

      this._cd.detectChanges;

    },
      (err) => {
        if (err.status == 401) {
          this.router.navigate(['/login']);
        }
        //this.errorText = err.error.message || err.error.errorMsg;
        //this.error = true;
      }
    );
  }

}


