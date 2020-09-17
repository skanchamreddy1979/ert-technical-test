import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BeersService } from '../services/beers-service';
import { DetailComponent } from '../detail/detail.component';
import { Subscription } from 'rxjs';

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

  constructor(
    private beersService: BeersService,
    private activateRoute: ActivatedRoute,
    private dailog: MatDialog) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.listSubscription = this.activateRoute.data.subscribe((response) => {
      this.bindDatasource(response.beerslist);
    });
  }

  public getFilterData(event: any) {
    this.listofSubscription = this.beersService.listbeers(event.target.value === '' ? '' : event.target.value, 1)
      .subscribe((response) => {
        this.bindDatasource(response);
      });
  }

  public getPagintion(event: PageEvent) {
    this.paginationSubscription = this.beersService.listbeers('',
      event.pageIndex === 0 ? 1 : event.pageIndex,
      event.pageSize)
      .subscribe((response) => {
        this.bindDatasource(response);
      });
  }

  public openBeerInfo(id: any) {
    this.infoSubscription = this.beersService.openbeer(id).subscribe((response) => {
      const dailogRef = this.dailog.open(DetailComponent);
      dailogRef.componentInstance.beerData = response[0];
    });
  }

  private bindDatasource(response: any) {
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    if (this.listSubscription) { this.listSubscription.unsubscribe(); }
    if (this.infoSubscription) { this.infoSubscription.unsubscribe(); }
    if (this.listofSubscription) { this.listofSubscription.unsubscribe(); }
    if (this.paginationSubscription) { this.paginationSubscription.unsubscribe(); }
  }
}

