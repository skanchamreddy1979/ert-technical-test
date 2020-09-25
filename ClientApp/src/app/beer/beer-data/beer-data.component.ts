import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { Beer } from '../models/Beer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-beer-data',
  templateUrl: './beer-data.component.html',
  styleUrls: ['./beer-data.component.css'],
})
export class BeerDataComponent implements OnInit, OnDestroy {
  constructor(
    private activatedroute: ActivatedRoute,
    private route: Router,
    private beerService: BeerService
  ) {}

  private subscription: Subscription;
  public beer = new Beer();

  ngOnInit(): void {
    this.setIdFromParam();
  }

  setIdFromParam(): void {
    this.beer.id = +this.activatedroute.snapshot.params['id'];
    this.getBeerDataById(this.beer.id);
  }

  getBeerDataById(id): void {
    this.subscription = this.beerService.getBeerById(id).subscribe((data) => {
      this.beer = data[0];
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
