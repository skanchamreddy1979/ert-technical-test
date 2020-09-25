import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeerService } from './services/beer.service';
import { Beer } from './models/Beer';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit, OnDestroy {
  constructor(
    private beerService: BeerService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  private subscription: Subscription;
  listBeers: Beer[];
  public term;
  public pageNumber: 1;

  ngOnInit(): void {
    this.loadBeers();
  }

  loadBeers(): void {
    this.subscription = this.beerService.getAllBeers().subscribe((data) => {
      this.listBeers = data;
    });
  }

  getBeer(beer): void {
    this.route.navigate([beer.id], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
