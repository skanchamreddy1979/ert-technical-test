import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { takeWhile } from 'rxjs/operators';
import { Beer } from 'src/app/models/beer.model';
import { BeerService } from 'src/app/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit, OnInit, OnDestroy {

  constructor(private _beerService: BeerService) { }

  private _isAlive = true;

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
    this.initBeerList(searchInput);
  }

  private initBeerList(beerName?: string): void {
    this._beerService.getBeerList(beerName)
      .pipe(takeWhile(() => this._isAlive))
      .subscribe(data => {
        this.dataSource.data = data;
      });
  }

  ngOnDestroy() {
    this._isAlive = false;
  }

}
