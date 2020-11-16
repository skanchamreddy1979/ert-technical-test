import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Beer } from '../../models/beer.model';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['name', 'tagLine', 'firstBrewed', 'abv'];

  dataSource = new MatTableDataSource<Beer>();

  beerList = new Subject<string>();


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  @Input() getBeers: (name?: string) => Observable<Beer[]>;

  @Input() title = '';

  constructor() {
    this.beerList.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this.getBeers(value)
          .subscribe(resp => {
            console.log(resp);
            this.dataSource.data = resp;});
      });
  }

  ngOnDestroy(): void {
    this.beerList.complete();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.beerList.next();
  }
}
