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

export interface State {
  [beerName]: Beer[],
  [filterName]: string,
}

export const reducers: ActionReducerMap<State> = {
  [beerName]: fetchBeersReducer,
  [filterName]: setFilterReducer,
};

export const effects = [BeerEffect]

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
