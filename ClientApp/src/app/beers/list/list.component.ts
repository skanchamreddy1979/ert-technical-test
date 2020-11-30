import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from 'src/app/beer.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { BeersService } from '../services/beers-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class BrewdogListComponent implements OnInit, OnDestroy {
  beers: Beer[] = [];
  totalRecords: number;
  searchString: string;
  private listSubscription: Subscription;
  private filterSubscription: Subscription;
  public dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  constructor(private _beersService: BeersService, private router: Router) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.getBeers();
  }

// Below method is used to navigate to details page.
  navigateToDetails(id: string) {
    sessionStorage.setItem('beerId', id);
    this.router.navigateByUrl('/detail');
  }
// Below method is used to search a beer by its name.
  getFilterData(event: any) {
    if (event.target.value !== '' || event.target.value !== null) {
      this.filterSubscription = this._beersService.searchBeerName(event.target.value).subscribe(res => {
        this.bindBeers(res);
      });
    }
  }
// Below method is used to bind Mat data source.
  private bindBeers(beers: Beer[]) {
    this.beers = <Beer[]>beers;
    this.dataSource = new MatTableDataSource(this.beers);
    this.totalRecords = this.beers.length;
    this.dataSource.paginator = this.paginator;
  }
// Below method fetches all the beers from the api.
  private getBeers() {
    this.listSubscription = this._beersService.getBeerList().subscribe(res => {
      this.bindBeers(res);
    });

  }
// Below method is used to unsubscribe all the subscribed services.
  ngOnDestroy = (): void => {
    if (this.listSubscription) { this.listSubscription.unsubscribe(); }
    if (this.filterSubscription) { this.filterSubscription.unsubscribe(); }
  }
}

