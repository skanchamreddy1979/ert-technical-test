import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { Beer } from 'src/app/beer/interface/beer';
import { BeerService } from 'src/app/beer/services/beer/beer.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  beers: Beer[] = [];
  beersAll: Beer[] = [];
  beersFiltered: Beer[] = [];
  private beerSubscription: Subscription;
  filter = new FormControl('');
  page = 1;
  pageSize = 10;
  collectionSize = 100;
  constructor(private beerService: BeerService,
    public loaderService: LoaderService) { }
  ngOnInit() {

    this.getAllBeers();
    this.filter.valueChanges.subscribe(text => {
      this.search(text);
    });
  }
  getAllBeers() {
    this.loaderService.setSpinner(true);
    this.beerSubscription = this.beerService.getAllBeers().subscribe(result => {
      console.log(result);
      this.beersFiltered = this.beersAll = result;
      this.collectionSize = this.beersAll.length;
      this.filterBeers(this.beersAll);
      this.loaderService.setSpinner(false);
    });

  }
  search(text: string) {
    this.page = 1;
    this.beersFiltered = this.beersAll.filter(beer => {
      const term = text.toLowerCase();
      return beer.name.toLowerCase().includes(term);
    });
    this.collectionSize = this.beersFiltered.length;
    this.filterBeers(this.beersFiltered);
  }
  filterBeers(beersList: Beer[]) {
    this.beers = beersList.map((beer, i) => ({ row: i + 1, ...beer })).slice(
      (this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  refreshBeers() {
    this.filterBeers(this.beersFiltered);
  }
  ngOnDestroy() {
    if (this.beerSubscription) {
      this.beerSubscription.unsubscribe();
    }
  }
}


