import { Paging, Page } from './paging.interface';
import { pagingName } from './paging.name';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const pagingSelector = createFeatureSelector<Paging>(pagingName);
export const pageSelector = createSelector(pagingSelector, state => state.page);
export const limitSelector = createSelector(pagingSelector, state => state.limit);
