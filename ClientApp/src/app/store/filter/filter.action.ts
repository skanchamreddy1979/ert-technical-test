import { createAction, props } from '@ngrx/store';
import { filterName } from './filter.name';

export enum filterActions{
  set = "SET_FILTER",
}

export const setFilterAction = createAction(filterActions.set, props<{[filterName]: string}>());