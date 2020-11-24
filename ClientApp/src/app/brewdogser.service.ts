import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBeerList } from './beerlist';
//import { Observable } from 'rxjs/Observable'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewdogserService {
    //service comp
  private _url: string = 'https://api.punkapi.com/v2/beers';
  constructor(private http : HttpClient) { }

  getBeerList() : Observable<IBeerList[]>
  {
    return this.http.get<IBeerList[]>(this._url);
  }
  getBeerById():Observable<any>
  {
    let params1 = new HttpParams().set("id","1");
    return this.http.get<IBeerList>(this._url,{params : params1});
  }
}
