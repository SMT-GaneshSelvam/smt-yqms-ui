import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';
import { ChecksheetService } from '../resources/checksheet.service';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { FilterData } from '../checksheets.component';

@Component({
  selector: 'app-cheetsheets-grid',
  templateUrl: './cheetsheets-grid.component.html',
  styleUrls: ['./cheetsheets-grid.component.scss']
})
export class CheetsheetsGridComponent implements OnInit {

  private gridColumnApi;

  public gridOptions: GridOptions;
  public rowData = [];
  public rowDataLength = 0;
  public filterData: FilterData = new FilterData([],[],[],[],[],[],[],[],[],[],[],[],[]);

  orderbyfield = "id";
  reversesort = "asc";
  defaultColDef: { suppressMenu: boolean; resizable: boolean };

  constructor(private router: Router, private _cd: ChangeDetectorRef, private checksheetService: ChecksheetService) {
  }

  ngOnInit() {
    this.getAllChecksheetsAgGrid(10);
  }

  ngOnDestroy() {
  }

  public getAllChecksheetsAgGrid(pageSize) {
    this.checksheetService.commonPOSTCall(AppSettingsModule.getAllChecksheets, this.filterData).subscribe((data: any) => {
      if (data && data.length > 0) {
        this.rowData = data;
        this.rowDataLength = data.length;

        this.gridOptions = <GridOptions>{ rowHeight: 40 };
        this.gridOptions.suppressColumnVirtualisation = true;
        this.gridOptions.columnDefs = [
          {
            headerName: "FCR ID",
            field: "fcr_id"
          },
          {
            headerName: "FCR Ref",
            field: "fcr_ref"
          },
          {
            headerName: "Tag No",
            field: "tag_no"
          },
          {
            headerName: "Tag Desc",
            field: "tag_desc"
          },
          {
            headerName: "Doc Type",
            field: "doc_type"
          },
          {
            headerName: "Type",
            field: "type"
          },
          {
            headerName: "Sub Type",
            field: "sub_type"
          },
          {
            headerName: "Checksheet",
            field: "checksheet"
          },

          {
            headerName: "Check Type",
            field: "check_type"
          },
          {
            headerName: "Unit Ref",
            field: "unit_ref"
          },
          {
            headerName: "System Ref",
            field: "system_ref"
          },
          {
            headerName: "SubSystem Ref",
            field: "subsystem_ref"
          },
          {
            headerName: "Workpack No",
            field: "workpack_no"
          },
          {
            headerName: "Location Ref",
            field: "location_ref"
          },
          {
            headerName: "Area Ref",
            field: "area_ref"
          },
          {
            headerName: "SubArea Ref",
            field: "subarea_ref"
          },
          {
            headerName: "Tag Discipline",
            field: "tag_discipline"
          },
          {
            headerName: "Checksheet Disc Ref",
            field: "checksheet_disc_ref"
          },
          {
            headerName: "Tag Group",
            field: "tag_group"
          },
          {
            headerName: "Building Number",
            field: "building_number"
          },
          {
            headerName: "Building No 2",
            field: "building_no_2"
          },
          {
            headerName: "Executed",
            field: "executed",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Executed By",
            field: "executed_by"
          },
          {
            headerName: "Executed Group",
            field: "executed_group"
          },
          {
            headerName: "Executed At",
            field: "executed_at"
          },
          {
            headerName: "Completed",
            field: "completed",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Completed By",
            field: "completed_by"
          },
          {
            headerName: "Completed Group",
            field: "completed_group"
          },
          {
            headerName: "Completed At",
            field: "completed_at"
          },
          {
            headerName: "Approved",
            field: "approved",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Approved By",
            field: "approved_by"
          },
          {
            headerName: "Approved At",
            field: "approved_at"
          },
          {
            headerName: "Sheet Revision",
            field: "sheet_revision"
          },
          {
            headerName: "Parent Tag",
            field: "parent_tag"
          },
          {
            headerName: "Loop Tag",
            field: "loop_tag"
          },
          {
            headerName: "Module",
            field: "module"
          },
          {
            headerName: "Has Competency",
            field: "has_competency",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Checksheet Has Master",
            field: "checksheet_has_master",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Soft Tag",
            field: "soft_tag",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Cable Tag",
            field: "cable_tag",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Is Loop",
            field: "is_loop",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Printed",
            field: "printed",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Printed At",
            field: "printed_at"
          },
          {
            headerName: "A Punchlist Outstanding",
            field: "a_punchlist_outstanding"
          },
          {
            headerName: "Turnover Group",
            field: "turnover_group"
          },
          {
            headerName: "Contractor",
            field: "contractor"
          },
          {
            headerName: "Scanned At",
            field: "scanned_at"
          },
          {
            headerName: "Man Hours",
            field: "man_hours"
          },
          {
            headerName: "Scanned By",
            field: "scanned_by"
          },
          {
            headerName: "Prim Drawing",
            field: "prim_drawing"
          },
          {
            headerName: "Electronic",
            field: "electronic",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Duration Days",
            field: "duration_days"
          },
          {
            headerName: "Requires 2 Step Completion",
            field: "requires_2_step_completion",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Issued",
            field: "issued",
            cellRenderer: this.checkBoxRendererFunc,
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: "Issued At",
            field: "issued_at"
          },
          {
            headerName: "Issued Id",
            field: "issued_id"
          },
          {
            headerName: "Issued Group",
            field: "issued_group"
          },
          {
            headerName: "Checksheet Description",
            field: "checksheet_description"
          },
          {
            headerName: "Group",
            field: "group"
          }

        ];
        this.defaultColDef = {
          suppressMenu: true,
          resizable: true

        }
      } else {
        this.rowData = [];
      }
    },
      (err) => {
      });
  }


  onGridReady(params) {
    let dataList;
    this.gridOptions.columnApi.getColumn("fcr_id").setSort("asc")
    dataList = this.rowData;
    params.api.setRowData(dataList);
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.suppressColumnVirtualisation = true;
    this.autoSizeAll(false);
  }

  autoSizeAll(skipHeader) {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
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
