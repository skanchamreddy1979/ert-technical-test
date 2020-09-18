import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BeersService } from '../services/beers-service';
import { DetailComponent } from '../detail/detail.component';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['beername', 'tagline', 'firstbrewed', 'abv'];
  public dataSource = new MatTableDataSource<any>([]);
  private listSubscription: Subscription;
  private infoSubscription: Subscription;
  private listofSubscription: Subscription;
  private paginationSubscription: Subscription;
  public brewdBeersData: any[] = [];
  public favouriteBeers: any[] = [];
  public disableCheckbox = false;

  constructor(
    private beersService: BeersService,
    private activateRoute: ActivatedRoute,
    private dailog: MatDialog) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.initialValueSubscrption();
  }

  public getFilterData = (event: any): void => {
    this.listofSubscription = this.beersService.listbeers(event.target.value === '' ? '' : event.target.value, 1)
      .subscribe((response) => {
        this.bindDatasource(response);
      });
  }

  public getPagintion = (event: PageEvent): void => {
    this.paginationSubscription = this.beersService.listbeers('',
      event.pageIndex === 0 ? 1 : event.pageIndex,
      event.pageSize)
      .subscribe((response) => {
        this.bindDatasource(response);
      });
  }

  public openBeerInfo = (id: any): void => {
    this.infoSubscription = this.beersService.openbeer(id).subscribe((response) => {
      const dailogRef = this.dailog.open(DetailComponent, {
        panelClass: 'my-dialog',
        width: '65%'
      });
      dailogRef.componentInstance.beerData = response[0];
    });
  }

  private initialValueSubscrption = (): void => {
    this.listSubscription = this.activateRoute.data.subscribe((response) => {
      this.bindDatasource(response.beerslist);
    });
  }

  private bindDatasource = (response: any): void => {
    this.brewdBeersData = response;
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy = (): void => {
    if (this.listSubscription) { this.listSubscription.unsubscribe(); }
    if (this.infoSubscription) { this.infoSubscription.unsubscribe(); }
    if (this.listofSubscription) { this.listofSubscription.unsubscribe(); }
    if (this.paginationSubscription) { this.paginationSubscription.unsubscribe(); }
  }
}

