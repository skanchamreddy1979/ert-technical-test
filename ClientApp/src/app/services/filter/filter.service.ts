import PagingService from 'src/app/services/paging/paging.service';
import BeerService from '../../services/beer/beer.service';
import { filterSelector } from './../../store/filter/filter.selector';
import { setFilterAction } from './../../store/filter/filter.action';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({providedIn: 'root'})
export default class FilterService {

  selectFilter() {
    return this.store$.select(filterSelector);
  }

  constructor(private store$: Store, private beerService: BeerService, private pagingService: PagingService) {}

  setFilter(filter: string) {
    this.store$.dispatch(setFilterAction({filter}));
    this.beerService.loadBeers();
    this.pagingService.setPage(1);
  }
}
