import { Page, Limit } from './paging.interface';
import { createAction, props } from '@ngrx/store';
import { pagingName } from './paging.name';

export enum pagingActions {
  setPage = 'SET_PAGE',
  setLimit = 'SET_LIMIT',
}

export const setPageAction = createAction(pagingActions.setPage, props<{[pagingName]: Page}>());
export const setLimitAction = createAction(pagingActions.setLimit, props<{[pagingName]: Limit}>());
