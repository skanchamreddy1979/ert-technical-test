import { ViewChild } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BeerService } from '../../services/beer.service';
import { BeerDetailsComponent } from '../beer-details/beer-details.component';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit , OnDestroy{
 public displayedColumns: string[] = ['beername', 'tagline', 'firstbrewed', 'abv'];
public dataSource = new MatTableDataSource<any>([]);
beerListSubscription: Subscription;
beerDetailsSubscription: Subscription;
filteredBeerSubscription: Subscription;
private paginationSubscription: Subscription;
public disableCheckbox = false;

constructor(
  private beersService: BeerService,
  private activateRoute: ActivatedRoute,
  private dailog: MatDialog) { }

@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
@ViewChild(MatSort, { static: true }) sort: MatSort;

ngOnInit() {
  this.initialValueSubscrption();
}

public getFilterData = (value: any): void => {
  this.filteredBeerSubscription = this.beersService.getBeers(value)
    .subscribe((response) => {
      this.bindDatasource(response);
    });
}

public openBeerInfo = (id: any): void => {
  this.beerDetailsSubscription = this.beersService.getBeerById(id).subscribe((response) => {
    const dailogRef = this.dailog.open(BeerDetailsComponent, {
      panelClass: 'my-dialog',
      width: '65%',
    });
    dailogRef.componentInstance.beerDetailsData = response[0];
  });
}

initialValueSubscrption = (): void => {
  this.beerListSubscription = this.activateRoute.data.subscribe((response) => {
    this.bindDatasource(response.beerListData);
  });
}

bindDatasource = (response: any): void => {
  this.dataSource = new MatTableDataSource(response);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

ngOnDestroy = (): void => {
  if (this.beerListSubscription) { this.beerListSubscription.unsubscribe(); }
  if (this.beerDetailsSubscription) { this.beerDetailsSubscription.unsubscribe(); }
  if (this.filteredBeerSubscription) { this.filteredBeerSubscription.unsubscribe(); }
}
}
