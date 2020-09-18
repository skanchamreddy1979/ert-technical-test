import { pagingSelector } from './../../store/paging/paging.selector';
import { setPageAction } from '../../store/paging/paging.action';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export default class PagingService {

  selectPaging() {
    return this.store$.select(pagingSelector);
  }

  constructor(private store$: Store) {}

  setPage(page: number) {
    this.store$.dispatch(setPageAction({paging: {page: page}}));
  }
}
