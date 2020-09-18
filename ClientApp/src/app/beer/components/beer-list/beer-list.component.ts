import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { Beer } from 'src/app/beer/interface/beer';
import { BeerService } from 'src/app/beer/services/beer/beer.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent implements OnInit, OnDestroy {
  beers: Beer[] = [];
  beersAll: Beer[] = [];
  beersFiltered: Beer[] = [];
  private subscription: Subscription;
  filter = new FormControl('');
  page = 1;
  pageSize = 10;
  collectionSize = 100;
  constructor(private beerService: BeerService,
    public loaderService: LoaderService) { }
  ngOnInit() {
    this.getAllBeers();
    this.intateValueChangeSubscription();
  }
  private intateValueChangeSubscription = (): void => {
    this.filter.valueChanges.subscribe(text => {
      this.search(text);
    });
  }
  private getAllBeers = (): void => {
    this.loaderService.setSpinner(true);
    this.subscription = this.beerService.getAllBeers().subscribe(result => {
      console.log(result);
      this.beersFiltered = this.beersAll = result;
      this.collectionSize = this.beersAll.length;
      this.filterBeers(this.beersAll);
      this.loaderService.setSpinner(false);
    });

  }
  private search = (text: string): void => {
    this.page = 1;
    this.beersFiltered = this.beersAll.filter(beer => {
      const term = text.toLowerCase();
      return beer.name.toLowerCase().includes(term);
    });
    this.collectionSize = this.beersFiltered.length;
    this.filterBeers(this.beersFiltered);
  }
  private filterBeers = (beersList: Beer[]): void => {
    this.beers = beersList.map((beer, i) => ({ row: i + 1, ...beer })).slice(
      (this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  refreshBeers=():void=> {
    this.filterBeers(this.beersFiltered);
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

