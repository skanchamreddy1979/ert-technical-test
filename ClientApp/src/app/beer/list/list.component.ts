import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  page = 1;
  pageSize = 10;
  pageTitle = 'Beer List';
  collectionSize: number;
  beers: Beer[] = [];
  filteredBeers: Beer[] = [];
  private subscriptions = new Subscription();
  allBeers: Beer[];

  constructor(private beerService: BeerService) { }

  _filter = '';
  get listFilter(): string {
    return this._filter;
  }
  set listFilter(value: string) {
    this._filter = value;
    this.filteredBeers = this.listFilter ? this.filterBeers(this.listFilter) : this.setBeers(this.allBeers, 1);
    this.collectionSize = this.filteredBeers.length >= this.pageSize ? this.beers.length : this.filteredBeers.length;
    this.page = 1;
  }

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this.subscriptions.add(this.beerService.list().subscribe((beers) => {
      this.allBeers = beers;
      this.setBeers(beers);
    }));
  }

  private setBeers(beers: Beer[], page?: number) {
    this.beers = beers;
    this.collectionSize = this.beers.length;
    this.filteredBeers = this.limitBeers(beers, page);
    return this.filteredBeers;
  }

  private limitBeers(beers: Beer[], page: number): Beer[] {
    page = page ? page : 1;
    return beers.slice((page - 1) * this.pageSize, (page - 1) * this.pageSize + this.pageSize);
  }

  filterBeers(filter: string): Beer[] {
    filter = filter.toLocaleLowerCase();
    const filtered = this.allBeers.filter((beer: Beer) => beer.name.toLocaleLowerCase().indexOf(filter) !== -1);
    return this.setBeers(filtered);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

