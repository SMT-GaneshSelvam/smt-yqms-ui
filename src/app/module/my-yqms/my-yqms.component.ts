import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-yqms',
  templateUrl: './my-yqms.component.html',
  styleUrls: ['./my-yqms.component.scss']
})
export class MyYqmsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  columnDefs = [
    { headerName: 'Workpack No', field: 'fcr_id' },
    { headerName: 'Locked', field: 'fcr_ref' },
    { headerName: 'Title', field: 'tag_no' },
    { headerName: 'Locked At', field: 'tag_desc' },
    { headerName: 'WorkpackType Ref', field: 'doc_type' },
    { headerName: 'Locked By', field: 'type' },
    { headerName: 'Unit Ref', field: 'type' },
    { headerName: 'Area Ref', field: 'type' }

  ];
  rowData = [
    { fcr_id: 'Toyota', fcr_ref: 'Celica', tag_no: 35000, tag_desc: 'Desc', doc_type: 'A', type: 'B' },
    { fcr_id: 'Ford', fcr_ref: 'Mondeo', tag_no: 32000, tag_desc: 'Desc', doc_type: 'A', type: 'B' },
    { fcr_id: 'Porsche', fcr_ref: 'Boxter', tag_no: 72000, tag_desc: 'Desc', doc_type: 'A', type: 'B' }
  ];

}
