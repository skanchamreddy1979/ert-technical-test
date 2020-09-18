import { createAction, props } from '@ngrx/store';
import { Beer } from 'src/app/beer.model';
import {beerName} from './beer.name';

export enum beerActions {
  fetch = 'FETCH_BEER_LIST',
  success = 'FETCH_BEER_LIST_SUCCESS',
  failure = 'FETCH_BEER_LIST_FAILED'
}

export const fetchBeerAction = createAction(beerActions.fetch);
export const fetchBeerActionSuccess = createAction(beerActions.success, props<{[beerName]: Beer[]}>());
export const fetchBeerActionFailure = createAction(beerActions.failure);
