import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-database',
  templateUrl: './tag-database.component.html',
  styleUrls: ['./tag-database.component.scss']
})
export class TagDatabaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
