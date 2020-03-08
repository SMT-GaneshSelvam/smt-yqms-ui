import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rfi-filter',
  templateUrl: './rfi-filter.component.html',
  styleUrls: ['./rfi-filter.component.scss']
})
export class RfiFilterComponent implements OnInit {

  constructor() { }

  public showHideFilter: boolean = true;

  dropdownList1 = [];
  selectedItems1 = [];

  dropdownList2 = [];
  selectedItems2 = [];

  dropdownList3 = [];
  selectedItems3 = [];

  dropdownList4 = [];
  selectedItems4 = [];

  dropdownList5 = [];
  selectedItems5 = [];

  dropdownList6 = [];
  selectedItems6 = [];

  dropdownList7 = [];
  selectedItems7 = [];

  dropdownList8 = [];
  selectedItems8 = [];

  dropdownList9 = [];
  selectedItems9 = [];

  dropdownList10 = [];
  selectedItems10 = [];

  dropdownList11 = [];
  selectedItems11 = [];

  dropdownSettings = {};
  ngOnInit() {

    this.dropdownList1 = [
      { item_id: 1, item_text: 'Allan - Allan FPSO' },
      { item_id: 2, item_text: 'MV16 - MV16 FPSO' },
    ];
    this.selectedItems1 = [
      { item_id: 3, item_text: 'Allan - Allan FPSO' }
    ];

    this.dropdownList5 = [
      { item_id: 1, item_text: '01 - General Equipment' },
      { item_id: 2, item_text: '13 - Riser & Well Topside' },
      { item_id: 3, item_text: '16 - Well & Riser' },
    ];
    this.selectedItems5 = [
      { item_id: 3, item_text: '16 - Well & Riser' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      placeholder: 'All'
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
