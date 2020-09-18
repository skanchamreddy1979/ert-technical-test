import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { BeerModel } from 'src/app/Models/beer-model';
import { DecimalPipe } from '@angular/common';
import { SortColumn, SortDirection } from 'src/app/Directives/sortable.directive';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
interface SearchResult {
  countries: BeerModel[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;



function sort(countries: BeerModel[], column: SortColumn, direction: string): BeerModel[] {
  if (direction === '' || column === '') {
    return countries;
  } else {
    return [...countries].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  apiUrl = environment.baseUrl;
  beerList: BeerModel[];
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _beerLists$ = new BehaviorSubject<BeerModel[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };
  constructor(private httpClient: HttpClient, private pipe: DecimalPipe) {

  }

  getAllBeers(): Observable<BeerModel[]> {
    return this.httpClient.get<BeerModel[]>(`${this.apiUrl}/${'beers'}`);
  }
  getBeerDetail(beerId: string): Observable<BeerModel> {
    return this.httpClient.get<BeerModel>(`${this.apiUrl}/${'beers'}/${beerId}`);
  }

  setObservable = (beerList): void => {
    this._beerLists$.next(beerList);
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._beerLists$.next(result.countries);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get beerLists$() { return this._beerLists$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }


  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    let countries = sort(this.beerList, sortColumn, sortDirection);

    countries = countries.filter(x => x.name.toLowerCase().startsWith(this.searchTerm.toLowerCase()));
    const total = countries.length;

    countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ countries, total });
  }
}
