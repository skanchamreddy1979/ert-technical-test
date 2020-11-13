import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/beer.model';
import { BeerService } from 'src/app/shared/beer.service';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.css']
})
export class ListControlComponent implements OnInit, OnDestroy {

  beersSubscription: Subscription;
  searchValue: string;
  page: number = 1;
  perPage: number = 10;
  reachedLastPage: boolean;

  constructor(
    private beerService: BeerService
  ) { }

  ngOnInit(): void {
    // Note: doing this weird last page check, as API does not give any paging info, 
    // total object count or even all objects to get total count (req. w/o pagination is limited to 25 items).
    this.beersSubscription = this.beerService.beersChanged
      .subscribe((beers: Beer[]) => {
        this.reachedLastPage = beers.length < this.perPage;
        
      });
    this.beerService.loadBeers(this.page, this.perPage);
  }

  onSearchSubmit(): void {
    this.page = 1;
    this.perPage = 10;
    this.beerService.loadBeers(this.page, this.perPage, this.searchValue);
  }

  onPerPageChange(): void {
    this.page = 1;
    this.beerService.loadBeers(this.page, this.perPage, this.searchValue);
  }

  onPreviousPageClick(): void {
    this.page--;
    this.beerService.loadBeers(this.page, this.perPage, this.searchValue);
  }

  onNextPageClick(): void {
    this.page++;
    this.beerService.loadBeers(this.page, this.perPage, this.searchValue);
  }

  ngOnDestroy() {
    if (this.beersSubscription) {
      this.beersSubscription.unsubscribe();
    }
  }
}
