import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Beer } from '../beer.model';
import { PunkAPIService } from '../shared/punk-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})

export class BeerListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'tagline', 'abv'];
  dataSource: MatTableDataSource<Beer>;
  private subscription: Subscription;

  beers: Beer[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort; 

  constructor(private punkAPIService: PunkAPIService) {
  }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(): void {
    this.subscription = this.punkAPIService.getAllBeers().subscribe((resp: any) => {
      this.beers = resp;

      this.dataSource = new MatTableDataSource(this.beers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
