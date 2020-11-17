import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

import { IBeer } from '../beer.model';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})

export class BeerDetailsComponent implements OnInit, OnDestroy {
  public id: number;
  public beer: IBeer;
  public unsubscrube$: Subject<void> = new Subject<void>();

  constructor(route: ActivatedRoute, private beerService: BeerService) {
    this.id = +route.snapshot.paramMap.get('id');
  }

  public ngOnInit() {
    this.beerService.getBeerDetails(this.id)
      .pipe(takeUntil(this.unsubscrube$))
      .subscribe(
        beers => {
          this.beer = beers[0];
        },
        catchError(error => {
          return throwError(error);
        })
      );
  }

  public ngOnDestroy() : void {
    this.unsubscrube$.next();
    this.unsubscrube$.complete();
  }
}
