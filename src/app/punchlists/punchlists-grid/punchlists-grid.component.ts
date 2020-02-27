import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punchlists-grid',
  templateUrl: './punchlists-grid.component.html',
  styleUrls: ['./punchlists-grid.component.scss']
})
export class PunchlistsGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'SMT'; 

  columnDefs = [ 
    {headerName: 'Punchlist No', field: 'fcr_id' }, 
    {headerName: 'Reference', field: 'fcr_ref' }, 
    {headerName: 'Applies To', field: 'tag_no'},    
    {headerName: 'Tag No', field: 'tag_desc'},
    {headerName: 'Tag Desc', field: 'doc_type'},
    {headerName: 'Work Pack', field: 'type'},
    {headerName: 'Type Ref', field: 'type'},
    {headerName: 'SubType Ref', field: 'type'}
    
  ]; 
  rowData = [ 
    { fcr_id: 'Toyota', fcr_ref: 'Celica', tag_no: 35000, tag_desc: 'Desc', doc_type: 'A', type: 'B' }, 
    { fcr_id: 'Ford', fcr_ref: 'Mondeo', tag_no: 32000, tag_desc: 'Desc', doc_type: 'A', type: 'B' }, 
    { fcr_id: 'Porsche', fcr_ref: 'Boxter', tag_no: 72000, tag_desc: 'Desc', doc_type: 'A', type: 'B' } 
  ]; 

}
