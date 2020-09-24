import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BeerService } from 'src/app/shared/beer.service';
import { BeerModel } from 'src/app/shared/models/beer.model';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit, OnDestroy {

  beerId: number;
  beerObj: BeerModel = {} as BeerModel;

  private beerSubscription: Subscription;

  constructor(
    private beerService: BeerService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.beerId = this.activatedRoute.snapshot.params.id;
    this.getBeerDetails();
  }

  getBeerDetails = (): void => {
    this.beerSubscription = this.beerService.getBeerDetails(this.beerId).subscribe(result => {
      if (result) {
        this.beerObj = result[0];
      }
    });
  }

  ngOnDestroy = (): void => {
    if (this.beerSubscription) {
      this.beerSubscription.unsubscribe();
    }
  }

}

