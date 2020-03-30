import { Component, OnInit, ViewChild } from '@angular/core';
import { CheetsheetsGridComponent } from './cheetsheets-grid/cheetsheets-grid.component';

@Component({
  selector: 'app-checksheets',
  templateUrl: './checksheets.component.html',
  styleUrls: ['./checksheets.component.scss']
})
export class ChecksheetsComponent implements OnInit {

  @ViewChild(CheetsheetsGridComponent, {static: false}) cheetsheetsGridComponent: CheetsheetsGridComponent;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // child is set
    this.cheetsheetsGridComponent.getAllChecksheetsAgGrid(10);
  }

  public expandedKeys: any[] = ['0'];


  public data: any[] = [
    {
        text: 'Entire Project', items: [
            { text: 'Allan - Allan FPSO', items: [{ text: '01 - General Equipments Layout' },{ text: 'Chair' }] },
            { text: 'Pre-Engneering' , items: [{ text: 'Table' },{ text: 'Chair' }]},
            { text: 'HEL - Helang FPSO', items: [{ text: 'Table' },{ text: 'Chair' }] },
            { text: 'Riser & Well Topside', items: [{ text: 'Table' },{ text: 'Chair' }] },
            { text: 'Metering Skid', items: [{ text: 'Table' },{ text: 'Chair' }] },
            { text: 'Gas Treatment', items: [{ text: 'Table' },{ text: 'Chair' }] },
            { text: 'Gas Compression', items: [{ text: 'Table' },{ text: 'Chair' }] }
        ]
    }
];

}
