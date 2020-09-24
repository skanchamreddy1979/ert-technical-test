  import {
    Component,
    OnInit,
    ViewChild } from '@angular/core';

  import { TableColumn } from 'src/app/shared/components/table/table-column.model';
  import { TableComponent } from '../../table.component';

  @Component({
    selector: 'app-table-wrapper',
    templateUrl: '<app-table><ng-template #expandedRow [data]="data" [columns]="columns" let-row="row">{{row.description}}</ng-template></app-table>'
  })
  export class WrapperComponent implements OnInit {

    data: any[];
    columns: TableColumn[];
    @ViewChild(TableComponent, { static: false }) table: TableComponent;

    constructor() { }

    ngOnInit(): void {
    }
  }
