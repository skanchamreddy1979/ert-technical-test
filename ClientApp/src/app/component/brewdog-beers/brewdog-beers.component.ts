import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrewdogBeers } from '../../interface/brewdog-beers';
import { BrewdogBeersService } from '../../service/brewdog-beers.service';

@Component({
  selector: 'app-brewdog-beers',
  templateUrl: './brewdog-beers.component.html',
  styleUrls: ['./brewdog-beers.component.css']
})
export class BrewdogBeersComponent implements OnInit, OnDestroy {

  constructor(private brewdogservice: BrewdogBeersService) { }
  brewdogBeersList: BrewdogBeers[];
  brewdogBeersSubscription: Subscription;
  brewdogBeersInitialList: BrewdogBeers[];
  searchTerm: string;
  pageSize = 10;
  page = 1;

  ngOnInit(): void {
    this.intializeGetParam();
  }

  private intializeGetParam = (): void => {
    this.brewdogBeersSubscription = this.brewdogservice.getAllBrewdogBeers().subscribe(
      data => { this.brewdogBeersList = data; this.brewdogBeersInitialList = data; },
      (err) => console.log(err)
    );
  }

  private onKey = (): void => {
    this.brewdogBeersList = this.brewdogBeersInitialList;
    this.brewdogBeersList = this.brewdogBeersList.filter(x => x.name.toLowerCase().
      startsWith(this.searchTerm.toLowerCase()));
  }

   ngOnDestroy = (): void => {
    if (this.brewdogBeersSubscription) { this.brewdogBeersSubscription.unsubscribe(); }
  }
}
