import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Beer } from './../../../models/beer.model';
import { BeerService } from './../../../services/beer.service';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['select', 'name', 'tagline', 'first_brewed', 'abv'];
  dataSource = new MatTableDataSource<Beer>();
  selection = new SelectionModel<Beer>(true, []);
  defaultPageSize = 10;
  notifier = new Subject();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private _beerService: BeerService) { }

  ngOnInit(): void {
    this.getBeers(1, this.defaultPageSize);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(takeUntil(this.notifier),
        tap(() => {
          this.getBeers(this.paginator.pageIndex + 1, this.defaultPageSize);
        }))
      .subscribe();

  }

  selectedCount(): number {
    return this.selection.selected.length;
  }

  getBeers(page: number, pageSize: number, nameFilter?: string) {
    this._beerService.getBeers(page, pageSize, nameFilter)
      .pipe(takeUntil(this.notifier))
      .subscribe(beers => {
        this.dataSource.data = beers;
      });
  }

  onSearchChage(input: string) {
    this.getBeers(1, this.defaultPageSize, input);
  }

  isCkecked(row: Beer) {
    const found = this.selection.selected.find(x => x.id === row.id);
    return found ? true : false;
  }
}
