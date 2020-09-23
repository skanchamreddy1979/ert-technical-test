import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation } from '@angular/core';
  
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { TableColumn } from 'src/app/core/models/table-column.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnChanges  {

  @Input() columns: TableColumn[];
  @Input() data: any[];
  
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  pageSizeOptions: number[] = [10, 20];
  displayedColumns: string[];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      let currentValue = changes['data'].currentValue;
      this.dataSource.data = currentValue == null || currentValue == undefined ? [] : currentValue;

      if (changes['data'].isFirstChange) {
        this.dataSource.paginator = this.paginator;
      }
    }

    if (changes['columns']) {
      this.displayedColumns = [...this.columns.map(c => c.key)];
    }
  }

  ngOnInit(): void {
  }

}
