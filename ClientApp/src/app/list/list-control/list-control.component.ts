import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Beer } from 'src/app/beer.model';
import { BeerService } from 'src/app/shared/beer.service';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.css']
})
export class ListControlComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  searchValue: string;
  page = 1;
  perPage = 10;
  reachedLastPage: boolean;

  constructor(
    private beerService: BeerService
  ) { }

  ngOnInit(): void {
    // Note: doing this weird last page check, as API does not give any paging info,
    // total object count or even all objects to get total count (req. w/o pagination is limited to 25 items).
    // In this case we can get page with 0 items and we don't know the exact number of pages.
    this.beerService.beersChanged
      .pipe(takeUntil(this.unsubscribe))
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
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
