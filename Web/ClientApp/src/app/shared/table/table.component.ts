import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation } from '@angular/core';
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
  
  displayedColumns: string[];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      let currentValue = changes['data'].currentValue;
      this.dataSource.data = currentValue == null || currentValue == undefined ? [] : currentValue;
    }

    if (changes['columns']) {
      this.displayedColumns = [...this.columns.map(c => c.key)];
    }
  }

  ngOnInit(): void {
  }

}
