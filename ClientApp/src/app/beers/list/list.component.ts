import { AfterViewInit, Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BeersService } from '../services/beers.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';
import { MatSort } from '@angular/material';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['name', 'tagLine', 'firstBrewed', 'abv'];
  listData = new MatTableDataSource<any>([]);
  private listDataSubscription: Subscription = new Subscription();
  private detailSubscription: Subscription = new Subscription();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private beersService: BeersService, private dialog: MatDialog) {

  }

  ngAfterViewInit() {
    this.bindData(null);
  }

  bindData(value: any) {
    this.listDataSubscription = this.beersService.Get(value, 1).subscribe(res => {
      this.listData = new MatTableDataSource(res);
      this.listData.paginator = this.paginator;
      this.listData.sort = this.sort;
    });
  }

  filterData(value: any) {
    this.bindData(value);
  }

  openPopup(id: number) {
    this.detailSubscription = this.beersService.GetById(id).subscribe((res) => {
      const dialogRef = this.dialog.open(DetailComponent, {
      });
      dialogRef.componentInstance.beerDetail = res[0];
    });
  }

  ngOnDestroy() {
    this.listDataSubscription.unsubscribe();
    this.detailSubscription.unsubscribe();
  }
}


