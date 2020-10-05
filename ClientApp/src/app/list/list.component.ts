import { AfterViewInit, Component, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IBeer} from "../beer.model"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['name', 'description', 'details'];
  dataSource: MatTableDataSource<IBeer>;
  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;
  beerListPropName: string = "beerList";
  @Input() beerList: IBeer[];

  constructor() {}

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes.hasOwnProperty(this.beerListPropName)) {
        const change = changes[this.beerListPropName];
        this.dataSource = new MatTableDataSource<IBeer>(change.currentValue);
        this.dataSource.paginator = this.paginator;
    }
  }
}
