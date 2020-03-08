import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-database-grid',
  templateUrl: './tag-database-grid.component.html',
  styleUrls: ['./tag-database-grid.component.scss']
})
export class TagDatabaseGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'SMT'; 

  columnDefs = [ 
    {headerName: 'Tag No', field: 'fcr_id' }, 
    {headerName: 'Tag Desc', field: 'fcr_ref' }, 
    {headerName: 'Parent Tag', field: 'tag_no'},    
    {headerName: 'Type Ref', field: 'tag_desc'},
    {headerName: 'SubType Ref', field: 'doc_type'},
    {headerName: 'Discipline Ref', field: 'type'},
    {headerName: 'Location Ref', field: 'type'},
    {headerName: 'Area Ref', field: 'type'}
    
  ]; 
  rowData = [ 
    { fcr_id: 'Toyota', fcr_ref: 'Celica', tag_no: 35000, tag_desc: 'Desc', doc_type: 'A', type: 'B' }, 
    { fcr_id: 'Ford', fcr_ref: 'Mondeo', tag_no: 32000, tag_desc: 'Desc', doc_type: 'A', type: 'B' }, 
    { fcr_id: 'Porsche', fcr_ref: 'Boxter', tag_no: 72000, tag_desc: 'Desc', doc_type: 'A', type: 'B' } 
  ]; 

}
