import { setFilterAction } from './filter.action';
import { filterName } from './filter.name';
import { createReducer, on } from '@ngrx/store';

const initialState = '';

const setFilterReducer = createReducer(
  initialState,
  on(setFilterAction, (state, payload) => payload[filterName])
);

export default setFilterReducer;
