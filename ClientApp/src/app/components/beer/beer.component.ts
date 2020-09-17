import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Beer } from 'src/app/models/beer.model';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit, OnDestroy {
  notifier = new Subject();
  beer: Beer;
  beerId: number;

  constructor(private route: ActivatedRoute, private beerService: BeerService) {
    this.beerId = +this.route.snapshot.params['beerId'];
  }

  ngOnInit() {
    this.beerService.getBeerById(this.beerId)
      .pipe(takeUntil(this.notifier))
      .subscribe(beer => {
        this.beer = beer;
      });
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
