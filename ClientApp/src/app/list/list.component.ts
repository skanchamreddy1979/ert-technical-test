import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Beer } from '../beer.model';
import { BeerService } from '../shared/beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  beers: Beer[] = [];

  constructor(
    private beerService: BeerService
  ) {}

  ngOnInit() {
    this.beerService.beersChanged
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((beers: Beer[]) => {
        this.beers = beers;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
