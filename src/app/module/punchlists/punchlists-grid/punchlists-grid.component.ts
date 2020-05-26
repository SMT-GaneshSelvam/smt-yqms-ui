import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { PunchListFilterData } from '../punchlists.component';
import { PunchlistService } from '../resources/punchlist.service';

@Component({
  selector: 'app-punchlists-grid',
  templateUrl: './punchlists-grid.component.html',
  styleUrls: ['./punchlists-grid.component.scss']
})
export class PunchlistsGridComponent implements OnInit {

  private gridColumnApi;

  public gridOptions: GridOptions;
  public rowData = [];
  public rowDataLength = 0;
  public punchListFilterData: PunchListFilterData = new PunchListFilterData(undefined,[],[],[],[],[],[],[],[],[],[],[],[]);

  orderbyfield = "id";
  reversesort = "asc";
  defaultColDef: { suppressMenu: boolean; resizable: boolean };

  constructor(private router: Router, private _cd: ChangeDetectorRef, private punchListService: PunchlistService) {
  }

  ngOnInit() {
    this.getAllPunchListsAgGrid(10);
  }

  ngOnDestroy() {
  }

  public getAllPunchListsAgGrid(pageSize) {
    this.punchListService.commonPOSTCall(AppSettingsModule.getAllPunchLists, this.punchListFilterData).subscribe((data: any) => {
      if (data && data.length > 0) {
        this.rowData = data;
        this.rowDataLength = data.length;

        this.gridOptions = <GridOptions>{ rowHeight: 40 };
        this.gridOptions.suppressColumnVirtualisation = true;
        this.gridOptions.columnDefs = [
          {
            headerName: "Punchlist No",
            field: "punchlist_no"
          },
          {
            headerName: "Reference",
            field: "reference"
          },
          {
            headerName: "Applies To",
            field: "applies_to"
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
            headerName: "Workpack",
            field: "workpack"
          },
          {
            headerName: "Type Ref",
            field: "type_ref"
          },
          {
            headerName: "Subtype Ref",
            field: "subtype_ref"
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
            headerName: "Location Ref",
            field: "location_ref"
          },
          {
            headerName: "Area Ref",
            field: "area_ref"
          },
          {
            headerName: "Punchlist Discipline",
            field: "punchlist_discipline"
          },
          {
            headerName: "Tag Ddiscipline Ref",
            field: "tag_discipline_ref"
          },
          {
            headerName: "SubArea Ref",
            field: "subarea_ref"
          },
          {
            headerName: "Punchlist Dscription",
            field: "punchlist_description"
          },
          {
            headerName: "Main Punchlist Comment",
            field: "main_punchlist_comment"
          },
          {
            headerName: "Drawing",
            field: "drawing"
          },
          {
            headerName: "Raised By",
            field: "raised_by"
          },
          {
            headerName: "Raised At",
            field: "raised_at"
          },
          {
            headerName: "Entered By",
            field: "entered_by"
          },
          {
            headerName: "Entered At",
            field: "entered_at"
          },
          {
            headerName: "Category",
            field: "category"
          },
          {
            headerName: "Responsible Person",
            field: "responsible_person"
          },
          {
            headerName: "Responsible Group",
            field: "responsible_group"
          },
          {
            headerName: "Defect Type",
            field: "defect_type"
          },
          {
            headerName: "Est. Man Data",
            field: "est_man_data"
          },
          {
            headerName: "Est Completed Date",
            field: "est_completed_date"
          },
          {
            headerName: "Priority",
            field: "priority"
          },
          {
            headerName: "Cleared",
            field: "cleared"
          },
          {
            headerName: "Cleared At",
            field: "cleared_at"
          },
          {
            headerName: "Cleared By",
            field: "cleared_by"
          },
          {
            headerName: "Cleared Group",
            field: "cleared_group"
          },
          {
            headerName: "Completed",
            field: "completed"
          },
          {
            headerName: "Completed At",
            field: "completed_at"
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
            headerName: "Completed PL Notes",
            field: "completed_pl_notes"
          },
          {
            headerName: "PO Number",
            field: "po_number"
          },
          {
            headerName: "SubSystem Group",
            field: "subsystem_group"
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
    this.gridOptions.columnApi.getColumn("punchlist_no").setSort("asc")
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
