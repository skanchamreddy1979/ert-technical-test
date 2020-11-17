import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Subject, throwError } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

import { IBeer } from '../beer.model';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  providers: [BeerService]
})

export class BeerListComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['name', 'tagline', 'first_brewed', 'abv'];
  public beers: IBeer[] = [];
  public unsubscrube$: Subject<void> = new Subject<void>();
  public filterValue: string;

  constructor(private beerService: BeerService) { }

  public ngOnInit() {
    this.loadBeers(this.initPageEvent());
  }

  public onKeyUp(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.loadBeers(this.initPageEvent());
  }

  private loadBeers(event?: PageEvent) {
    this.beerService.getBeers(event.pageIndex + 1, event.pageSize, this.filterValue)
      .pipe(takeUntil(this.unsubscrube$))
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

  public ngOnDestroy(): void {
    this.unsubscrube$.next();
    this.unsubscrube$.complete();
  }
}
