import { pagingSelector } from './../paging/paging.selector';
import { BeerItem } from './../../interfaces/beer-item.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { beerName } from './beer.name';

export const beerItemsSelector = createFeatureSelector<BeerItem[]>(beerName);

export const beerCountSelector = createSelector(beerItemsSelector, state => state.length);

export const beersPagedSelector = createSelector([pagingSelector, beerItemsSelector],
  (paging, beers) => [...beers].splice((paging.page - 1) * paging.limit, paging.limit));
