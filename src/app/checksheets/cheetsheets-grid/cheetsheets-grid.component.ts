import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheetsheets-grid',
  templateUrl: './cheetsheets-grid.component.html',
  styleUrls: ['./cheetsheets-grid.component.scss']
})
export class CheetsheetsGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'SMT'; 

  columnDefs = [ 
    {headerName: 'FCR ID', field: 'fcr_id' }, 
    {headerName: 'FCR Ref', field: 'fcr_ref' }, 
    {headerName: 'Tag No', field: 'tag_no'},    
    {headerName: 'Tag Desc', field: 'tag_desc'},
    {headerName: 'Doc Type', field: 'doc_type'},
    {headerName: 'Type', field: 'type'}
    
  ]; 
  rowData = [ 
    { fcr_id: 'Toyota', fcr_ref: 'Celica', tag_no: 35000, tag_desc: 'Desc', doc_type: 'A', type: 'B' }, 
    { fcr_id: 'Ford', fcr_ref: 'Mondeo', tag_no: 32000, tag_desc: 'Desc', doc_type: 'A', type: 'B' }, 
    { fcr_id: 'Porsche', fcr_ref: 'Boxter', tag_no: 72000, tag_desc: 'Desc', doc_type: 'A', type: 'B' } 
  ]; 

}
