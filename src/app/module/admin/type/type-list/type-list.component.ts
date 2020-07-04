import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TypeService } from '../resources/type.service';
import { GridOptions } from "ag-grid-community";
import { Router } from '@angular/router';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import * as _ from 'lodash';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {
 
    public gridOptions: GridOptions;
    public rowData = [];
    public rowDataLength = 0;
    public paginationPageSize = 0;
    public noOfPages = 0;
    public currentPage;
    private pageArray = [];
    public startElement = 1;
    public endElement;
    public capabilities;
    public cellClicked;
    public showLeftEllipse = false;
    public showRightEllipse = false;
    public serviceHandler = {
      service: false,
      message: ""
    };
    alertMessage: string = '';
  
    public operationStatus = false;
    public operationStatusText = "";
    isUnitLoaded = false;
  
  
    /*for infinite scroll */
    scrollcount = 1;
    pagenumber = 1;
    datasizeCount = 10;
    loadDataFlag = true;
    loadAll: boolean = false;
    errorMessage = "";
    orderbyfield = "id";
    reversesort = "asc";
    defaultColDef: { suppressMenu: boolean; };
  
    constructor(private router: Router, private _cd: ChangeDetectorRef, private typeService: TypeService) {
      //this.capabilities = JSON.parse(localStorage.getItem('capabilities'));
    }
  
    ngOnInit() {
      this.getAllTypesAgGrid(10);
      this.alertMessage = this.typeService.alertMessage;
      this.typeService.status.subscribe(data => {
        this.operationStatus = true;
        if (data == "added") {
          this.operationStatusText = "New Type Created";
          this.operationStatus = true;
        }
        else if (data == "updated") {
          this.operationStatusText = "Type Updated";
          this.operationStatus = true;
        }
        else {
          this.operationStatus = false;
        }
      });
      setTimeout(() => {
        this.serviceHandler.message = null;
        this.serviceHandler.service = false;
        this.operationStatus = false;
        this.operationStatusText = null;
        this.alertMessage = null;
      }, 2000);
  
    }
  
    ngOnDestroy() {
      this.typeService.changeOperation(null);
      this.typeService.alertMessage = '';
    }
    /*   onCellKeyDown(event) {
        if (event.event.shiftKey && event.event.key == "ArrowDown") {
          if (this.gridOptions.api.getRangeSelections()[0].end.rowIndex >= ((this.currentPage + 1) * this.paginationPageSize) - 1) {
            this.onGoToPage(this.currentPage);
            this.gridOptions.api.copySelectedRangeToClipboard(true);
          }
        }
        if (event.event.shiftKey && event.event.key == "ArrowUp") {
          if (this.gridOptions.api.getRangeSelections()[0].end.rowIndex <= ((this.currentPage) * this.paginationPageSize)) {
            this.onGoToPage(this.currentPage);
            this.gridOptions.api.copySelectedRangeToClipboard(true);
          }
        }
      } */
    sortme = function (colname) {
      this.rowData = [];
      if (colname == this.orderbyfield) {
        if (this.reversesort == 'asc') {
          this.reversesort = 'desc';
        }
        else {
          this.reversesort = 'asc';
        }
      }
      else {
        this.reversesort = 'asc';
      }
      this.pagenumber = 1;
      this.loadDataFlag = true
      this.orderbyfield = colname;
      this.getSipAllQuestion();
    };
    showAll = () => {
      this.loadDataFlag = true;
      this.isUnitLoaded = false;
  
      this.paginationPageSize = this.rowDataLength;
      this.endElement = this.rowDataLength;
      this.startElement = 1;
      this.pagenumber = 1;
      this.scrollcount = 1;
      this.loadAll = true;
      this.rowData = [];
      this.getSipAllQuestion()
    }
    getSipAllQuestion() {
  
  
      this.typeService.commonGETCall(AppSettingsModule.unit + '?size=' + this.datasizeCount * 100 + '&pageNo=' + this.pagenumber + '&orderBy=' + this.orderbyfield + '&direction=' + this.reversesort).subscribe((data: any) => {
        this.noOfPages = data.content.totalPages;
        this.rowData = this.rowData.concat(data.content);
        this.rowData = _.uniqBy(this.rowData, "id");
  
  
        this.isUnitLoaded = true;
        this.scrollcount = (data.totalCount) / this.datasizeCount;
        if (this.pagenumber < this.scrollcount) {
          this.pagenumber++;
          this.loadDataFlag = true;
        } else {
          this.loadDataFlag = false;
          this.pagenumber = 1;
        }
        if (this.rowDataLength == 0) {
          this.errorMessage = "No Records found";
          this.pagenumber = 1;
        }
      },
        (err) => {
          this.serviceHandler.service = true,
            this.serviceHandler.message = err.error.message;
        });
    }
    getAllTypesAgGrid(pageSize) {
      this.isUnitLoaded = false;
      this.typeService.commonGETCall(AppSettingsModule.type + '?pageNo=1&size=15000&orderBy=id&direction=asc').subscribe((data: any) => {
        if (data && data.length > 0) {
          this.rowData = data;
          this.rowDataLength = data.length;
          this.paginationPageSize = pageSize;
  
          this.gridOptions = <GridOptions>{ rowHeight: 40 };
          this.gridOptions.columnDefs = [
            {
              headerName: "ID",
              field: "id",
              suppressResize: true,
              sortingOrder: ["asc", "desc"],
              suppressMovable: true,
              headerTooltip: "ID",
              icons: {
                sortAscending: '<span class="glyphicon glyphicon-sort-by-attributes"></span>',
                sortDescending: '<span class="glyphicon glyphicon-sort-by-attributes-alt"></span>'
              },
              unSortIcon: true,
              width: 100,
              cellStyle: function (params) { if (params.data.active == 0) { return { color: '#ccc' } } }
            },
            {
              headerName: "Description",
              field: "description",
              unSortIcon: true,
              suppressResize: true,
              suppressMovable: true,
              tooltipField: "description",
              headerTooltip: "Description",
              sortingOrder: ["asc", "desc"],
              icons: {
                sortAscending: '<span class="glyphicon glyphicon-sort-by-attributes"></span>',
                sortDescending: '<span class="glyphicon glyphicon-sort-by-attributes-alt"></span>'
              },
              comparator: function (a, b) {
                if (typeof a === 'string') {
                  return a.localeCompare(b);
                } else {
                  return (a > b ? 1 : (a < b ? -1 : 0));
                }
              },
              cellStyle: function (params) { if (params.data.active == 0) { return { color: '#ccc' } } }
            },
            {
              headerName: "Edit",
              sortingOrder: [null],
              suppressSorting: true,
              suppressResize: true,
              cellClass: "unitEdit",
              headerClass: "unitEdit",
              headerTooltip: "Edit",
              suppressMovable: true,
              cellRenderer: this.customEditCellRendererFunc,
              onCellClicked: this.goToEdit
            }
          ];
          this.defaultColDef = {
            suppressMenu: true
          }
        } else {
          this.rowData = [];
        }
        this.isUnitLoaded = true;
      },
        (err) => {
          this.serviceHandler.service = true,
            this.serviceHandler.message = err.error.message;
        });
    }
  
  
    onGridReady(params) {
      let dataList;
      this.gridOptions.columnApi.getColumn("id").setSort("asc")
      dataList = this.rowData;
      this.endElement = this.rowData.length;
      params.api.setRowData(dataList);
      params.api.sizeColumnsToFit();
      this.noOfPages = params.api.paginationGetTotalPages();
      this.currentPage = params.api.paginationGetCurrentPage();
      this.constructArray(this.noOfPages);
    }
    public customEditCellRendererFunc(params): string {
      let cellContent: string = '';
      try {
        let href = "#/sip/questions/edit/" + params.data.id;
        cellContent += '<a ' + '><span class="glyphicon glyphicon-edit editDeleteGlyph"></span></a>';
      }
      catch (exception) {
        console.error(exception);
      }
  
      return cellContent
    }
  
  
    //view button
    public customVeiwCellRendererFunc(params): string {
      let cellContent: string = '';
      try {
        cellContent += '<span class="glyphicon glyphicon-eye-open viewGlyph"></span>'
      }
      catch (exception) {
        console.error(exception);
      }
      return cellContent
    }
  
    private goToEdit = (params) => {
      this.cellClicked = this.gridOptions.api.getSelectedRows();
      let Id = params.data.id;
      this.router.navigate(['admin/type/edit/' + Id]);
    }
  
    private goToView = (params) => {
      this.cellClicked = this.gridOptions.api.getSelectedRows();
      let Id = params.data.id;
      this.router.navigate(['sip/question/view/' + Id]);
    }
  
    private constructArray = (ArraySize) => {
      let i = (this.pageArray[this.pageArray.length - 1] == undefined) ? 1 : this.pageArray[this.pageArray.length - 1] + 1;
      let setactive = i;
  
      this.pageArray = [];
      if (ArraySize < 10) {
        this.pageArray = Array.from(Array(ArraySize), () => i++);
      }
      else {
        this.pageArray = Array.from(Array(10), () => i++)
        if (i > this.noOfPages) {
          this.showRightEllipse = false;
        }
        else {
          this.showRightEllipse = true;
        }
      }
      this.onGoToPage(setactive - 1)
  
    }
  
    public constructNewArray = () => {
      this.showLeftEllipse = true;
      let currentlength = this.pageArray[this.pageArray.length - 1];
      if (this.noOfPages - currentlength >= 10) {
        this.constructArray(10)
      }
      else if (this.noOfPages - currentlength < 10 && (this.noOfPages - currentlength != 0)) {
        this.showRightEllipse = false;
        this.constructArray(this.noOfPages - currentlength)
      }
      else {
        this.showRightEllipse = false;
      }
    }
    public constructOldArray = () => {
      let i = this.pageArray[0] - 1;
      let setactive = i;
  
      if (i == this.noOfPages) {
        this.showRightEllipse = false;
      }
      else {
        this.showRightEllipse = true;
      }
      this.pageArray = Array.from(Array(10), () => i--).reverse();
      if (this.pageArray[0] == 1) {
        this.showLeftEllipse = false;
      }
      this.onGoToPage(setactive - 1)
    }
    public changePagination = (pageSize) => {
      if (!this.loadAll) {
        let currentPage = this.currentPage;
        let currentPageSize = this.gridOptions.api.paginationGetPageSize()
        let currentPageArray = this.pageArray;
        this.paginationPageSize = pageSize;
        this.gridOptions.api.paginationSetPageSize(pageSize);
        this.currentPage = this.gridOptions.api.paginationGetCurrentPage();
        this.noOfPages = this.gridOptions.api.paginationGetTotalPages();
        this.pageArray = [];
        if (currentPage >= this.noOfPages) {
          this.pageArray = []
          this.pageArray = [this.noOfPages - (this.noOfPages % 10)]
          this.constructNewArray();
          if (this.noOfPages <= 10) {
            this.showLeftEllipse = false;
          }
          this.onGoToPage(this.noOfPages - 1)
        }
        else {
          this.pageArray = [currentPageArray[0] - 1];
          let pageArraySize;
          if (this.noOfPages >= this.pageArray[0] + 10) {
            this.constructArray(10)
            this.showRightEllipse = true;
  
          }
          else {
            let page = this.noOfPages - currentPageArray[0];
            this.constructArray(page + 1);
            this.showRightEllipse = false;
          }
          this.onGoToPage(currentPage)
        }
      }
      else {
        this.loadAll = false;
        this.pageArray = [];
        this.rowData = [];
        this.rowDataLength = 0;
        this.paginationPageSize = 0;
        this.noOfPages = 0;
        this.pagenumber = 1;
  
        this.getAllTypesAgGrid(pageSize);
      }
    }
  
    onBtFirst = () => {
      this.currentPage = 0;
      this.gridOptions.api.paginationGoToFirstPage();
      this.pageArray = [];
      if (this.noOfPages > 10) {
        this.showRightEllipse = true
      }
      this.showLeftEllipse = false
      this.constructArray(this.noOfPages < 10 ? this.noOfPages : 10);
    }
  
    onBtLast = () => {
      this.currentPage = this.noOfPages;
      if (this.noOfPages > 10) {
        this.pageArray = []
        if (this.noOfPages % 10 == 0) {
          this.pageArray = [(this.noOfPages + 1)];
          this.constructOldArray();
        }
        else {
          this.pageArray = [this.noOfPages - (this.noOfPages % 10)]
          this.constructNewArray();
        }
        this.onGoToPage(this.pageArray[this.pageArray.length - 1]);
        this.showLeftEllipse = true;
      }
      else {
        this.onGoToPage(this.noOfPages)
      }
      this.currentPage = this.currentPage - 1;
  
    }
  
    onBtNext = () => {
      this.currentPage = this.currentPage + 1;
      if (this.pageArray[this.pageArray.length - 1] == this.currentPage) {
        this.constructNewArray()
      }
      this.onGoToPage(this.currentPage)
    }
  
    onBtPrevious = () => {
      if (this.currentPage == this.noOfPages) {
        this.currentPage = this.currentPage - 1
      }
  
      this.currentPage = this.currentPage - 1;
      if (this.pageArray[0] == this.currentPage + 2) {
        this.constructOldArray();
      }
  
      this.onGoToPage(this.currentPage)
  
    }
    onGoToPage = (pageNumber) => {
      this.startElement = (pageNumber * this.paginationPageSize) + 1
      this.endElement = this.startElement + this.paginationPageSize - 1;
      if (this.noOfPages == pageNumber + 1) {
        this.endElement = this.rowDataLength
      }
      this.currentPage = pageNumber;
      this.gridOptions.api.paginationGoToPage(pageNumber);
      if (this.currentPage == this.noOfPages) {
        console.log(pageNumber + '' + this.currentPage)
        this.startElement = ((pageNumber - 1) * this.paginationPageSize) + 1
        this.endElement = this.rowData.length;
        this.currentPage = this.currentPage;
  
      }
    }
  
    postSort = () => {
      this.onBtFirst();
    }
  
    public checkBoxRendererFunc(params): string {
      let cellContent: string = '';
      try {
        cellContent += `<input type="checkbox"  ${params.value ? 'checked' : ''}>`;
      }
      catch (exception) {
        console.error(exception);
      }
  
      return cellContent
    }
  
  
  }
  