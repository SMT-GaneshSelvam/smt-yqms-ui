import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';
import { ChecksheetService } from '../resources/checksheet.service';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';

@Component({
  selector: 'app-cheetsheets-grid',
  templateUrl: './cheetsheets-grid.component.html',
  styleUrls: ['./cheetsheets-grid.component.scss']
})
export class CheetsheetsGridComponent implements OnInit {

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
  isQuestionLoaded = false;


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

  constructor(private router: Router, private _cd: ChangeDetectorRef, private checksheetService: ChecksheetService) {
  }

  ngOnInit() {
    this.getAllChecksheetsAgGrid(10);
    this.alertMessage = this.checksheetService.alertMessage;
    this.checksheetService.status.subscribe(data => {
      this.operationStatus = true;
      if (data == "added") {
        this.operationStatusText = "New Question Created";
        this.operationStatus = true;
      }
      else if (data == "updated") {
        this.operationStatusText = "Question Updated";
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
    this.checksheetService.changeOperation(null);
    this.checksheetService.alertMessage = '';
  }
  onCellKeyDown(event) {
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
  }
  sortme = function (colname) {
    this.rowData = [];
    if (colname == this.orderbyfield) {
      // this.reversesort = !this.reversesort;
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
    //this.getSipAllQuestion();
  };
  showAll = () => {
    this.loadDataFlag = true;
    this.isQuestionLoaded = false;

    this.paginationPageSize = this.rowDataLength;
    this.endElement = this.rowDataLength;
    // this.gridOptions.api.paginationSetPageSize(this.rowDataLength);
    this.startElement = 1;
    this.pagenumber = 1;
    this.scrollcount = 1;
    this.loadAll = true;
    this.rowData = [];
    //this.getSipAllQuestion()
  }
  
  getAllChecksheetsAgGrid(pageSize) {
    this.isQuestionLoaded = false;
    this.checksheetService.commonGETCall(AppSettingsModule.getAllChecksheets + '?pageNo=1&size=15000&orderBy=id&direction=asc').subscribe((data: any) => {
      if (data && data.length > 0) {
        this.rowData = data;
        this.rowDataLength = data.length;
        this.paginationPageSize = pageSize;

        this.gridOptions = <GridOptions>{ rowHeight: 40 };
        this.gridOptions.columnDefs = [
          {
            headerName: "FCR ID",
            field: "fcr_id",
            suppressResize: true,
            sortingOrder: ["asc", "desc"],
            suppressMovable: true,
            headerTooltip: "FCR ID",
            icons: {
              sortAscending: '<span class="glyphicon glyphicon-sort-by-attributes"></span>',
              sortDescending: '<span class="glyphicon glyphicon-sort-by-attributes-alt"></span>'
            },
            unSortIcon: true,
            width: 100,
            cellStyle: function (params) { if (params.data.active == 0) { return { color: '#ccc' } } }
          },
          {
            headerName: "FCR Ref",
            field: "fcr_ref",
            unSortIcon: true,
            suppressResize: true,
            suppressMovable: true,
            tooltipField: "fcr_ref",
            headerTooltip: "FCR Ref",
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
            headerName: "Tag No",
            field: "tag_no",
            suppressResize: true,
            sortingOrder: ["asc", "desc"],
            unSortIcon: true,
            suppressMovable: true,
            tooltipField: "tag_no",
            headerTooltip: "Tag No",
            comparator: function (a, b) {
              if (typeof a === 'string') {
                return a.localeCompare(b);
              } else {
                return (a > b ? 1 : (a < b ? -1 : 0));
              }
            },

            icons: {
              sortAscending: '<span class="glyphicon glyphicon-sort-by-attributes"></span>',
              sortDescending: '<span class="glyphicon glyphicon-sort-by-attributes-alt"></span>'
            },
            cellStyle: function (params) { if (params.data.active == 0) { return { color: '#ccc' } } }

          },
          {
            headerName: "Tag Desc",
            field: "tag_desc",
            suppressResize: true,
            suppressMovable: true,
            tooltipField: "tag_desc",
            autoHeight: true,
            headerTooltip: "Tag Desc",
            comparator: function (a, b) {
              if (typeof a === 'string') {
                return a.localeCompare(b);
              } else {
                return (a > b ? 1 : (a < b ? -1 : 0));
              }
            },

            sortingOrder: ["asc", "desc"],
            unSortIcon: true,
            icons: {
              sortAscending: '<span class="glyphicon glyphicon-sort-by-attributes"></span>',
              sortDescending: '<span class="glyphicon glyphicon-sort-by-attributes-alt"></span>'
            },
            cellStyle: function (params) { if (params.data.active == 0) { return { color: '#ccc' } } }
          },
          {
            headerName: "Doc Type",
            field: "doc_type",
            unSortIcon: true,
            suppressResize: true,
            suppressMovable: true,
            tooltipField: "doc_type",
            headerTooltip: "Doc Type",
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
          }
        ];
        this.defaultColDef = {
          suppressMenu: true
        }
      } else {
        this.rowData = [];
      }
      this.isQuestionLoaded = true;
    },
      (err) => {
        this.serviceHandler.service = true,
          this.serviceHandler.message = err.error.message;
      });
  }


  onGridReady(params) {
    let dataList;
    this.gridOptions.columnApi.getColumn("fcr_id").setSort("asc")
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
      cellContent += '<a href=' + href + '><span class="glyphicon glyphicon-edit editDeleteGlyph"></span></a>';
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
    if (params.event.ctrlKey) {
      let url = "#/sip/questions/edit/" + params.data.id;
      window.open(url, '_blank');
    } else {
      this.cellClicked = this.gridOptions.api.getSelectedRows();
      let Id = params.data.id;
      this.router.navigate(['sip/questions/edit/' + Id]);
    }
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
        // let pageArraySize = (this.noOfPages < 10) ? this.noOfPages : 10;
        // this.constructArray(pageArraySize);
        //this.onGoToPage(this.noOfPages-1);
        // this.onBtLast()
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
          //pageArraySize = (this.paginationPageSize % this.pageArray[0] )+1;
          let page = this.noOfPages - currentPageArray[0];
          this.constructArray(page + 1);
          this.showRightEllipse = false;
        }
        this.onGoToPage(currentPage)
      }
      //this.currentPage = this.noOfPages-1;
    }
    else {
      this.loadAll = false;
      this.pageArray = [];
      this.rowData = [];
      this.rowDataLength = 0;
      this.paginationPageSize = 0;
      this.noOfPages = 0;
      this.pagenumber = 1;

      //this.getAllSipQuestionsAgGrid(pageSize);
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
      // this.gridOptions.api.paginationGoToLastPage();

    }
    this.currentPage = this.currentPage - 1;

  }

  onBtNext = () => {
    this.currentPage = this.currentPage + 1;
    if (this.pageArray[this.pageArray.length - 1] == this.currentPage) {
      this.constructNewArray()
    }
    //this.gridOptions.api.paginationGoToNextPage();
    this.onGoToPage(this.currentPage)
  }

  onBtPrevious = () => {
    if (this.currentPage == this.noOfPages) {
      this.currentPage = this.currentPage - 1
    }

    this.currentPage = this.currentPage - 1;
    //this.gridOptions.api.paginationGoToPreviousPage();
    if (this.pageArray[0] == this.currentPage + 2) {
      this.constructOldArray();
    }

    this.onGoToPage(this.currentPage)

  }
  onGoToPage = (pageNumber) => {
    this.startElement = (pageNumber * this.paginationPageSize) + 1
    //this.startElement = this.rowData[(pageNumber*10)].id;
    this.endElement = this.startElement + this.paginationPageSize - 1;
    //this.endElement = this.rowData[(pageNumber*10)+1].id;
    if (this.noOfPages == pageNumber + 1) {
      this.endElement = this.rowDataLength
    }
    this.currentPage = pageNumber;
    this.gridOptions.api.paginationGoToPage(pageNumber);
    if (this.currentPage == this.noOfPages) {
      console.log(pageNumber + '' + this.currentPage)
      this.startElement = ((pageNumber - 1) * this.paginationPageSize) + 1
      //this.startElement = this.rowData[(pageNumber*10)].id;
      this.endElement = this.rowData.length;

      this.currentPage = this.currentPage;

    }
  }

  postSort = () => {
    this.onBtFirst();
  }

}
