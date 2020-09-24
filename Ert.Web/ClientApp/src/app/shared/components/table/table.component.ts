import {
  animate,
  state,
  style,
  transition,
  trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { TableColumn } from 'src/app/shared/components/table/table-column.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnChanges  {

  @Input() columns: TableColumn[];
  @Input() data: any[];
  @Input() pageSizeOptions: number[] = [10, 20];

  @Output() selectedChange: EventEmitter<any[]> = new EventEmitter();

  @ContentChild('expandedRow', { static: false }) expandedRowTemplate: TemplateRef<any>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  expandedRow: any | null;
  displayedColumns: string[];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  selectionColumnKey = 'selection';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      const currentValue = changes['data'].currentValue;
      this.dataSource.data = !currentValue ? [] : currentValue;

      if (changes['data'].isFirstChange) {
        this.dataSource.paginator = this.paginator;
      }
    }

    if (changes['columns']) {
      let displayedColumns = [];
      const currentValue = changes['columns'].currentValue;

      if (currentValue) {
        displayedColumns = currentValue.map(c => c.key);
        displayedColumns.push(this.selectionColumnKey);
      }

      this.displayedColumns = displayedColumns;
    }
  }

  ngOnInit(): void {
  }

  onRowClick(row: any) {
    if (this.expandedRowTemplate) {
      this.expandedRow = this.expandedRow === row ? null : row;
    }
  }

  onItemSelect(row: any) {
    this.selection.toggle(row);
    this.selectedChange.emit(this.selection.selected);
  }

}
