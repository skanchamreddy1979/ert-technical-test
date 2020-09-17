import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { takeWhile } from 'rxjs/operators';
import { Beer } from '../beer.model';
import { BeerService } from '../services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit, OnInit, OnDestroy {

  constructor(private _beerService: BeerService) { }

  private isAlive = true;
  private searchInput = '';

  displayedColumns: string[] = ['name', 'tagLine', 'firstBrewed', 'abv'];
  dataSource = new MatTableDataSource<Beer>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit() {
    this.initBeerList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onSearchChange(searchInput: string) {
    this.dataSource.filter = searchInput;
  }

  private initBeerList(): void {
    this._beerService.getBeerList()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(data => {
        this.dataSource.data = data;
      });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

}