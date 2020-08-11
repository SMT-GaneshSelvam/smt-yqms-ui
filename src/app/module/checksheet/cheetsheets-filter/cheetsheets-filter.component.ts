import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChecksheetService} from '../resources/checksheet.service';
import * as _ from 'lodash';
import { FilterData } from '../checksheets.component';

@Component({
  selector: 'app-cheetsheets-filter',
  templateUrl: './cheetsheets-filter.component.html',
  styleUrls: ['./cheetsheets-filter.component.scss']
})
export class CheetsheetsFilterComponent implements OnInit {

  constructor(private checksheetService: ChecksheetService) { }

  @Output() submit: EventEmitter<any> = new EventEmitter();

  public showHideFilter: boolean = true;
  public filterData: FilterData = new FilterData([],[],[],[],[],[],[],[],[],[],[],[],[]);

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
  checkSheetTypeSelectedList = [];
  disciplineSelectedList = [];
  checkSheetRefSelectedList = [];

  dropdownSettings = {};

  ngOnInit() {


    this.checksheetService.getAllUnits().subscribe((data: any) => { this.unitList = data });
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

  onUnitChange(item: any) {
    this.checksheetService.getSystemsByUnit(_.map(this.unitSelectedList, 'id')).subscribe((data: any) => { this.systemList = data });
  }

  onSystemChange(item: any) {
    this.checksheetService.getSubSystemsByUnitAndSystem(_.map(this.unitSelectedList, 'id'),_.map(this.systemSelectedList, 'id')).subscribe((data: any) => { this.subSystemList = data });
  }

  onLocationChange(item: any) {
    this.checksheetService.getAreasByLocation(_.map(this.locationSelectedList, 'id')).subscribe((data: any) => { this.areaList = data });
  }

  onAreaChange(item: any) {
    this.checksheetService.getSubAreasByLocationAndArea(_.map(this.locationSelectedList, 'id'), _.map(this.areaSelectedList, 'id')).subscribe((data: any) => { this.subAreaList = data });
  }

  onTypeChange(item: any) {
    this.checksheetService.getSubTypesByType(_.map(this.typeSelectedList, 'id')).subscribe((data: any) => { this.subTypeList = data });
  }

  onSubmitFilter(){

    let unit = this.unitList.length == this.unitSelectedList.length ?
    ['ALL'] : _.map(this.unitSelectedList, 'id');

    let system = this.systemList.length == this.systemSelectedList.length ?
    ['ALL'] : _.map(this.systemSelectedList, 'id');

    let subSystem = this.subSystemList.length == this.subSystemSelectedList.length ?
    ['ALL'] : _.map(this.subSystemSelectedList, 'id');

    let location = this.locationList.length == this.locationSelectedList.length ?
    ['ALL'] : _.map(this.locationSelectedList, 'id');

    let area = this.areaList.length == this.areaSelectedList.length ?
    ['ALL'] : _.map(this.areaSelectedList, 'id');

    let subArea = this.subAreaList.length == this.subAreaSelectedList.length ?
    ['ALL'] : _.map(this.subAreaSelectedList, 'id');

    let contractor = this.contractorList.length == this.contractorSelectedList.length ?
    ['ALL'] : _.map(this.contractorSelectedList, 'id');

    let type = this.typeList.length == this.typeSelectedList.length ?
    ['ALL'] : _.map(this.typeSelectedList, 'id');

    let subType = this.subTypeList.length == this.subTypeSelectedList.length ?
    ['ALL'] : _.map(this.subTypeSelectedList, 'id');

    let tagGroup = this.tagGroupList.length == this.tagGroupSelectedList.length ?
    ['ALL'] : _.map(this.tagGroupSelectedList, 'id');

    let checkSheetType = this.checkSheetTypeList.length == this.checkSheetTypeSelectedList.length ?
    ['ALL'] : _.map(this.checkSheetTypeSelectedList, 'id');

    let discipline = this.disciplineList.length == this.disciplineSelectedList.length ?
    ['ALL'] : _.map(this.disciplineSelectedList, 'id');

    let checkSheetRef = this.checkSheetRefList.length == this.checkSheetRefSelectedList.length ?
    ['ALL'] : _.map(this.checkSheetRefSelectedList, 'id');

    this.checksheetService.filterData = {
      unit: unit,
      system: system,
      subSystem: subSystem,
      location: location,
      area: area,
      subArea: subArea,
      contractor: contractor,
      type: type,
      subType: subType,
      tagGroup: tagGroup,
      checkSheetType: checkSheetType,
      discipline: discipline,
      checkSheetRef: checkSheetRef
    };

    this.submit.emit(null);
  }

}

