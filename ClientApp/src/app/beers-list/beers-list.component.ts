import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject, throwError } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
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
  length = 325;
  filterValue: string;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.loadBeers(this.initPageEvent());
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }

  onKeyUp(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.loadBeers(this.initPageEvent());
  }

  private loadBeers(event?: PageEvent) {
    this.beerService.getBeers(event.pageIndex + 1, event.pageSize, this.filterValue)
      .pipe(takeUntil(this.notifier))
      .subscribe(
        beers => {
          this.beers = beers;
        },
        catchError(error => {
          return throwError(error);
        })
      );
  }

  private initPageEvent(): PageEvent {
    const pageEvent = new PageEvent();
    pageEvent.pageIndex = 0;
    pageEvent.pageSize = 10;

    return pageEvent;
  }
}
