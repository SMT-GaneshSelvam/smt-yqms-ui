import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ImportService } from '../resources/import.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {

  constructor(private importService: ImportService, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    this._cd.detectChanges();
  }

  columnDefs : Array<any>;
  rowData : Array<any>;

  renderGrid($event) {

    this.columnDefs = this.importService.gridData['columnDefs'];
    this.rowData = this.importService.gridData['rowData'];

  }

}
