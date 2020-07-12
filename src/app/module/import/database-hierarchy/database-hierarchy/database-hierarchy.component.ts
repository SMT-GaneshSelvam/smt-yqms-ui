import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';
import { ImportService } from '../../resources/import.service';
import { Router } from '@angular/router';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';

@Component({
  selector: 'app-database-hierarchy',
  templateUrl: './database-hierarchy.component.html',
  styleUrls: ['./database-hierarchy.component.scss']
})
export class DatabaseHierarchyComponent implements OnInit {

  @Output() dataImportedEvent = new EventEmitter<string>();

  requestBody = {};

  columnDefs: Array<any>;
  rowData : Array<any>;
  constructor(private router: Router, private importService: ImportService, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
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

      this.importData();

    }
    reader.readAsBinaryString(file);
  }

  selectTable($event){

    console.log("SMT "+$event.target.id);

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


