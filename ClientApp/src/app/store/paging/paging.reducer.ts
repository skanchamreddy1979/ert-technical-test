import { Paging } from './paging.interface';
import { setLimitAction } from './paging.action';
import { createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';
import { setPageAction } from './paging.action';

const initialState: Paging = {
  page: 1,
  limit: 10
};

const setPagingReducer = createReducer(
  initialState,
  on(setPageAction, (store, payload) => {
    return {...store, ...payload.paging };
  }),
  on(setLimitAction, (store, payload) => {
    return {...store, ...payload.paging };
  })
);

export default setPagingReducer;
