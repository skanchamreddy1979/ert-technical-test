import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { BeerService } from 'src/app/beer/services/beer.service';
import { Beer } from 'src/app/beer/interfaces/beer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BeerDetailsComponent } from '../beer-details/beer-details.component';

// const beers = [];

@Component({
  selector: 'app-brew-dog-beers',
  templateUrl: './brew-dog-beers.component.html',
  styleUrls: ['./brew-dog-beers.component.css'],
})
export class BrewDogBeersComponent implements OnInit, OnDestroy {
  displayedColumns = ['name', 'tagLine', 'firstBrewed', 'abv'];
  dataSource: MatTableDataSource<Beer>;
  private listSubscription: Subscription;
  private infoSubscription: Subscription;
  private listofSubscription: Subscription;
  public beers: Beer[] = [];

  constructor(private beerService: BeerService, private activateRoute: ActivatedRoute,
    public dailog: MatDialog) {}
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit() {
    this.initialValueSubscrption();
  }
  public getBeerInfo = (id: any): void => {
    this.infoSubscription = this.beerService.getBeer(id).subscribe((response) => {
      const dailogRef = this.dailog.open(BeerDetailsComponent, {
        panelClass: 'my-dialog',
        width: '65%'
      });
      dailogRef.componentInstance.beerData = response[0];
    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public initialValueSubscrption = (): void => {
    this.listofSubscription = this.beerService.getAllBeers()
      .subscribe((response) => {
        this.bindDataSource(response);
      });
    this.listSubscription = this.activateRoute.data.subscribe((response) => {
      this.bindDataSource(response.beerslist);
    });
  }

  public bindDataSource = (response: any): void => {
    this.beers = response;
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy = (): void => {
    if (this.listSubscription) { this.listSubscription.unsubscribe(); }
    if (this.infoSubscription) { this.infoSubscription.unsubscribe(); }
    if (this.listofSubscription) { this.listofSubscription.unsubscribe(); }
  }
}
