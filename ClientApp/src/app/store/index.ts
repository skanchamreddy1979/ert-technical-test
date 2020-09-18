import { Paging } from './paging/paging.interface';
import { pagingName } from './paging/paging.name';
import { filterName } from './filter/filter.name';
import fetchBeersReducer from './beer/beer.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { beerName } from './beer/beer.name';
import BeerEffect from './beer/beer.effect';
import { Beer } from '../beer.model';
import setFilterReducer from './filter/filter.reducer';
import setPagingReducer from './paging/paging.reducer';

export interface State {
  [beerName]: Beer[];
  [filterName]: string;
  [pagingName]: Paging;
}

export const reducers: ActionReducerMap<State> = {
  [beerName]: fetchBeersReducer,
  [filterName]: setFilterReducer,
  [pagingName]: setPagingReducer,
};

export const effects = [
  BeerEffect,
];

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
