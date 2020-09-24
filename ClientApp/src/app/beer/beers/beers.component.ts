import { OnDestroy } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BeersService } from '../services/beers.service';

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  abv: number;
  description: string;
  image_url: string;
}

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  beersDataSource = new MatTableDataSource<Beer>();
  public displayedColumns = ['name', 'tagline', 'firstBrewed', 'abv'];
  private subscription: Subscription;

  constructor(private beerService: BeersService) {}

  ngOnInit(): void {
    this.initializingFilters();
    this.loadData();
    this.beersDataSource.paginator = this.paginator;
  }

  public initializingFilters = (): void => {
    this.beersDataSource.filterPredicate = (data, filter: string): boolean => {
      return data['name'].toLowerCase().includes(filter);
    };
  }

  public searchTerm = (startsWith: string): void => {
    this.beersDataSource.filter = startsWith.trim().toLowerCase();
    if (this.beersDataSource.paginator) {
      this.beersDataSource.paginator.firstPage();
    }
  }

  public loadData = (): void => {
    this.subscription = this.beerService.getAllBeers().subscribe((response) => {
      this.beersDataSource.data = [];
      this.beersDataSource.data = response;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
