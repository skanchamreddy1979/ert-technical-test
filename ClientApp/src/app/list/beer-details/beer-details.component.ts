import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/beer.model';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit, OnDestroy {
  private beerSubscription: Subscription;

  beer: Beer;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.beerSubscription = this.route.data.subscribe((data: Data) => {
      if (data.beer) {
        this.beer = data.beer;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.beerSubscription) {
      this.beerSubscription.unsubscribe();
    }
  }
}
