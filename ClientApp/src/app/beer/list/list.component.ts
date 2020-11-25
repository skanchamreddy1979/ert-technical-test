import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  page = 1;
  pageSize = 10;
  pageTitle = 'Beer List';
  collectionSize: number;
  beers: Beer[] = [];
  filteredBeers: Beer[] = [];

  constructor(private beerService: BeerService) { }

  _filter = '';
  get listFilter(): string {
    return this._filter;
  }
  set listFilter(value: string) {
    this._filter = value;
    console.log('this.listFilter', this.listFilter, this.beers.length, this.filteredBeers.length);
    this.filteredBeers = this.listFilter ? this.filterBeers(this.listFilter) : this.beers;
    this.collectionSize = this.beers.length;
  }

  ngOnInit() {
    this.getBeers(this.page);
  }

  getBeers(page: number) {
    return this.beerService.list().subscribe((beers) => {
      this.beers = beers;
      this.collectionSize = this.beers.length;
      this.filteredBeers = this.limitBeers(page);
    });
  }

  private limitBeers(page: number): Beer[] {
    return this.beers.slice((page - 1) * this.pageSize, (page - 1) * this.pageSize + this.pageSize);
  }

  filterBeers(filter: string): Beer[] {
    filter = filter.toLocaleLowerCase();
    const filtered = this.beers.filter((beer: Beer) => beer.name.toLocaleLowerCase().indexOf(filter) !== -1);
    this.collectionSize = filtered.length;
    return filtered;
  }
}

