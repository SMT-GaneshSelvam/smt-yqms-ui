import { Component, OnInit, ViewChild } from '@angular/core';
import { PunchlistsGridComponent } from './punchlists-grid/punchlists-grid.component';

@Component({
  selector: 'app-punchlists',
  templateUrl: './punchlists.component.html',
  styleUrls: ['./punchlists.component.scss']
})
export class PunchlistsComponent implements OnInit {

  @ViewChild(PunchlistsGridComponent, {static: false}) punchlistsGridComponent: PunchlistsGridComponent;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // child is set
    this.punchlistsGridComponent.getAllPunchListsAgGrid(10);
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

export class PunchListFilterData {
  constructor(
    public punchListNumber: number,
    public unit: Array<any>,
    public system: Array<any>,
    public subSystem: Array<any>,
    public location: Array<any>,
    public area: Array<any>,
    public subArea: Array<any>,
    public category: Array<any>,
    public defectType: Array<any>,
    public priority: Array<any>,
    public discipline: Array<any>,
    public responsibleGroup: Array<any>,
    public workpack: Array<any>,
  ) { }
}