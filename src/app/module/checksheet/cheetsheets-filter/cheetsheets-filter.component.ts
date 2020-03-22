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

  unitList = [];
  systemList = [];
  subSystemList = [];
  locationList = [];
  areaList = [];
  subAreaList = [];
  contractorList = [];
  typeList = [];
  subTypeList = [];
  tagGroupList = [];
  checkSheetTypeList = [];
  disciplineList = [];
  checkSheetRefList = [];

  unitSelectedList = [];
  systemSelectedList = [];
  subSystemSelectedList = [];
  locationSelectedList = [];
  areaSelectedList = [];
  subAreaSelectedList = [];
  contractorSelectedList = [];
  typeSelectedList = [];
  subTypeSelectedList = [];
  tagGroupSelectedList = [];
  checkSheetSelectedTypeList = [];
  disciplineSelectedList = [];
  checkSheetRefSelectedList = [];

  dropdownSettings = {};

  ngOnInit() {


    this.checksheetService.getAllUnits().subscribe((data: any) => { this.unitList = data });
    this.checksheetService.getAllSystems().subscribe((data: any) => { this.systemList = data });
    this.checksheetService.getAllLocations().subscribe((data: any) => { this.locationList = data });
    this.checksheetService.getAllContractors().subscribe((data: any) => { this.contractorList = data });
    this.checksheetService.getAllTypes().subscribe((data: any) => { this.typeList = data });
    this.checksheetService.getAllTagGroups().subscribe((data: any) => { this.tagGroupList = data });
    this.checksheetService.getAllCheckSheetTypes().subscribe((data: any) => { this.checkSheetTypeList = data });
    this.checksheetService.getAllDisciplines().subscribe((data: any) => { this.disciplineList = data });
    this.checksheetService.getAllCheckSheetRefs().subscribe((data: any) => { this.checkSheetRefList = data });

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

  onLocationChange(item: any) {
    let location = "";
    this.locationSelectedList.forEach(function myFunction(item, index) {
      location = location + item.id + ",";
    });
    location = location.substring(0, location.length - 1);
    this.checksheetService.getAreasByLocation(location).subscribe((data: any) => { this.areaList = data });
  }

  onAreaChange(item: any) {
    let location = "";
    this.locationSelectedList.forEach(function myFunction(item, index) {
      location = location + item.id + ",";
    });
    location = location.substring(0, location.length - 1);

    let area = "";
    this.areaSelectedList.forEach(function myFunction(item, index) {
      area = area + item.id + ",";
    });
    area = area.substring(0, area.length - 1);

    this.checksheetService.getSubAreasByLocationAndArea(location, area).subscribe((data: any) => { this.subAreaList = data });
  }

  onTypeChange(item: any) {
    let type = "";
    this.typeSelectedList.forEach(function myFunction(item, index) {
      type = type + item.id + ",";
    });
    type = type.substring(0, type.length - 1);
    this.checksheetService.getSubTypesByType(type).subscribe((data: any) => { this.subTypeList = data });
  }

}
