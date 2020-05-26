import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PunchlistService} from '../resources/punchlist.service';
import * as _ from 'lodash';
import { PunchListFilterData } from '../punchlists.component';

@Component({
  selector: 'app-punchlists-filter',
  templateUrl: './punchlists-filter.component.html',
  styleUrls: ['./punchlists-filter.component.scss']
})
export class PunchlistsFilterComponent implements OnInit {

  constructor(private punchlistService: PunchlistService) { }

  @Output() submit: EventEmitter<any> = new EventEmitter();

  public showHideFilter: boolean = true;
  public filterData: PunchListFilterData = new PunchListFilterData(undefined,[],[],[],[],[],[],[],[],[],[],[],[]);

  punchListNumber: number;
  unitList = [];
  systemList = [];
  subSystemList = [];
  locationList = [];
  areaList = [];
  subAreaList = [];
  categoryList = [];
  defectTypeList = [];
  priorityList = [];
  disciplineList = [];
  responsibleGroupList = [];
  workpackTypeList = [];

  unitSelectedList = [];
  systemSelectedList = [];
  subSystemSelectedList = [];
  locationSelectedList = [];
  areaSelectedList = [];
  subAreaSelectedList = [];
  categorySelectedList = [];
  defectTypeSelectedList = [];
  prioritySelectedList = [];
  disciplineSelectedList = [];
  responsibleGroupSelectedList = [];
  workpackTypeSelectedList = [];

  dropdownSettings = {};

  ngOnInit() {


    this.punchlistService.getAllUnits().subscribe((data: any) => { this.unitList = data });
    this.punchlistService.getAllSystems().subscribe((data: any) => { this.systemList = data });
    this.punchlistService.getAllLocations().subscribe((data: any) => { this.locationList = data });
    this.punchlistService.getAllCategories().subscribe((data: any) => { this.categoryList = data });
    this.punchlistService.getAllDefectTypes().subscribe((data: any) => { this.defectTypeList = data });
    this.punchlistService.getAllPriorities().subscribe((data: any) => { this.priorityList = data });
    this.punchlistService.getAllDisciplines().subscribe((data: any) => { this.disciplineList = data });
    this.punchlistService.getAllResponsibleGroups().subscribe((data: any) => { this.responsibleGroupList = data });
    this.punchlistService.getAllWorkpackTypes().subscribe((data: any) => { this.workpackTypeList = data });

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
    this.punchlistService.getSubSystemsBySystem(_.map(this.systemSelectedList, 'id')).subscribe((data: any) => { this.subSystemList = data });
  }

  onLocationChange(item: any) {
    this.punchlistService.getAreasByLocation(_.map(this.locationSelectedList, 'id')).subscribe((data: any) => { this.areaList = data });
  }

  onAreaChange(item: any) {
    this.punchlistService.getSubAreasByLocationAndArea(_.map(this.locationSelectedList, 'id'), _.map(this.areaSelectedList, 'id')).subscribe((data: any) => { this.subAreaList = data });
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

    let category = this.categoryList.length == this.categorySelectedList.length ?
    ['ALL'] : _.map(this.categorySelectedList, 'id');

    let defectType = this.defectTypeList.length == this.defectTypeSelectedList.length ?
    ['ALL'] : _.map(this.defectTypeSelectedList, 'id');

    let priority = this.priorityList.length == this.prioritySelectedList.length ?
    ['ALL'] : _.map(this.prioritySelectedList, 'id');

    let discipline = this.disciplineList.length == this.disciplineSelectedList.length ?
    ['ALL'] : _.map(this.disciplineSelectedList, 'id');

    let responsibleGroup = this.responsibleGroupList.length == this.responsibleGroupSelectedList.length ?
    ['ALL'] : _.map(this.responsibleGroupSelectedList, 'id');

    let workpackType = this.workpackTypeList.length == this.workpackTypeSelectedList.length ?
    ['ALL'] : _.map(this.workpackTypeSelectedList, 'id');

    this.punchlistService.punchListFilterData = {
      punchListNumber:this.punchListNumber,
      unit: unit,
      system: system,
      subSystem: subSystem,
      location: location,
      area: area,
      subArea: subArea,
      category: category,
      defectType: defectType,
      priority: priority,
      discipline: discipline,
      responsibleGroup: responsibleGroup,
      workpack: workpackType
    };

    this.submit.emit(null);
  }

}
