import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IBeer } from '../../models/beer';
import { BeerService } from '../../services/beer.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: './beer-list.component.html',
    styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit, OnDestroy {
    pageTitle = 'Beer List';
    showImage = false;
    filteredBeers: IBeer[];
    displayedBeers: IBeer[];
    beers: IBeer[] = [];
    errorMessage = '';
    _beerService: BeerService;
    notifier = new Subject();
    startIndex = 0;
    finishIndex = 9;
    pageIndex = 0;
    pageSize = 10;

    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredBeers = this.listFilter ? this.performFilter(this.listFilter) : this.getAllBeer();
    }

    constructor(private beerService: BeerService) {
      this._beerService = beerService;
    }

    ngOnInit(): void {
      this.setDisplayedBeers();
    }

    ngOnDestroy(): void {
      this.notifier.next();
      this.notifier.complete();
    }

    getAllBeer(): IBeer[]
    {
      this.pageIndex = 0;
      this.filteredBeers = this.beers;
      this.updateIndexes();
      this.displayedBeers = this.beers.slice(this.startIndex, this.finishIndex + 1);
      return this.beers;
    }

    performFilter(filterBy: string): IBeer[] {
      // Updates page index to 0.
      this.pageIndex = 0;
      // Filters beers.
      filterBy = filterBy.toLocaleLowerCase();
      const filteredBeers = this.beers.filter((beer: IBeer) => beer.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
      // Updates filtered beers count on any users type.
      this.updateIndexes();
      this.displayedBeers = filteredBeers.slice(this.startIndex, this.finishIndex + 1);
      return filteredBeers;
    }

    setDisplayedBeers(): void {
      this._beerService.getBeers().pipe(takeUntil(this.notifier)).subscribe(
        {
          next: beers => {
            this.beers = beers;
            this.filteredBeers = this.beers;
            this.displayedBeers = this.beers.slice(this.startIndex, this.finishIndex + 1);
          },
          error: err => this.errorMessage = err
        });
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    updateIndexes(): void{
      this.startIndex = this.pageIndex * this.pageSize;
      this.finishIndex = (this.filteredBeers.length - 1 - this.startIndex >= this.pageSize)
      ? this.startIndex + this.pageSize - 1
      : this.filteredBeers.length - 1;
    }

    onBack(): void {
      if (this.pageIndex > 0)
      {
        --this.pageIndex;
        this.updateIndexes();
        this.displayedBeers = this.filteredBeers.slice(this.startIndex, this.finishIndex + 1);
      }
    }

    onForward(): void {
      if (Math.floor(this.filteredBeers.length / ((this.pageIndex + 1) * this.pageSize)) > 0 )
      {
        ++this.pageIndex;
        this.updateIndexes();
        this.displayedBeers = this.filteredBeers.slice(this.startIndex, this.finishIndex + 1);
      }
    }
  }

