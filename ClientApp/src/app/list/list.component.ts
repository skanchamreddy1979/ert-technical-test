import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beer } from '../beer.model';
import { BeerService } from '../shared/beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {

  private beersSubscription: Subscription;

  public beers: Beer[] = [];

  constructor(
    private beerService: BeerService
  ) {}

  ngOnInit() {
    this.beersSubscription = this.beerService.beersChanged
      .subscribe((beers: Beer[]) => {
        this.beers = beers;
      });
  }

  ngOnDestroy() {
    this.beersSubscription.unsubscribe();
  }
}
