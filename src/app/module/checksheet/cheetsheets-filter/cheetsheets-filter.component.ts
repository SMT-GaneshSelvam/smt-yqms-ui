import { Component, OnInit } from '@angular/core';
import { ChecksheetService } from '../resources/checksheet.service';

@Component({
  selector: 'app-cheetsheets-filter',
  templateUrl: './cheetsheets-filter.component.html',
  styleUrls: ['./cheetsheets-filter.component.scss']
})
export class CheetsheetsFilterComponent implements OnInit {

  constructor(private checksheetService: ChecksheetService) { }

  public showHideFilter: boolean = true;

  unitsList = [];
  systemList = [];
  subSystemList = [];
  locationList = [];
  areaList = [];
  subAreaList = [];
  contractorList = [];
  typeList = [];
  subTypeList = [];
  tagGroupList = [];
  checkSheetType = [];
  disciplineList = [];
  checkSheetRefList = [];

  systemSelectedList = [];
  subSystemSelectedList = [];


  dropdownSettings = {};

  ngOnInit() {


    this.checksheetService.getAllUnits().subscribe((data: any) => { this.unitsList = data });
    this.checksheetService.getAllSystems().subscribe((data: any) => { this.systemList = data });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'description',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      placeholder: 'All'
    };
  }

  onSystemChange(item: any) {
    let system = "";
    this.systemSelectedList.forEach(function myFunction(item, index) {
      system = system + item.id + ",";
    });
    system = system.substring(0, system.length - 1);
    this.checksheetService.getSubSystemsBySystem(system).subscribe((data: any) => { this.subSystemList = data });
  }
  onSelectAll(items: any) {
    console.log(items);
  }


}
