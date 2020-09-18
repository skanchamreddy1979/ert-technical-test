import { fetchBeerActionSuccess } from './beer.action';
import { createReducer, on } from '@ngrx/store';
import { Beer } from 'src/app/beer.model';

const initialState: Beer[] = [];

const fetchBeersReducer = createReducer(
  initialState,
  on(fetchBeerActionSuccess, (state, payload) => payload.beerList)
);

export default fetchBeersReducer;
