import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { Beer } from '../beer.model';
import { BeerService } from '../services/beer.service';


@Component({
  selector: 'app-beers',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css'],
  providers: [BeerService]
})

export class BeersListComponent implements OnInit, OnDestroy  {
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  beers: Beer[] = [];
  notifier = new Subject();
  pageSize = 10;
  pageIndex = 0;
  length = 325;
  error: any;
  filterValue;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    let pageEvent = new PageEvent();

    pageEvent.pageIndex = 0;
    pageEvent.pageSize = 10;

    this.loadBeers(pageEvent);
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }

  onKeyUp(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    let pageEvent = new PageEvent();

    pageEvent.pageIndex = 0;
    pageEvent.pageSize = 10;

    this.loadBeers(pageEvent);
  }

  private loadBeers(event?: PageEvent) {
    this.beerService.getBeers(event.pageIndex + 1, event.pageSize, this.filterValue)
      .subscribe(
        beers => {
          this.beers = beers;
        },
        error => {
          this.error = error.message;
          console.log(error);
        }
      );
  }
}
