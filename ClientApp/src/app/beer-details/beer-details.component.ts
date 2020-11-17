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
  id: number;
  beer: IBeer;
  notifier = new Subject();

  constructor(route: ActivatedRoute, private beerService: BeerService) {
    this.id = +route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.beerService.getBeerDetails(this.id)
      .pipe(takeUntil(this.notifier))
      .subscribe(
        beers => {
          this.beer = beers[0];
        },
        catchError(error => {
          return throwError(error);
        })
      );
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
