import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../beer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http : HttpClient) { }

  getAllBeers() : Observable<Beer[]>{
    console.log(this.http.get<Beer[]>("https://api.punkapi.com/v2/beers"));
    return this.http.get<Beer[]>("https://api.punkapi.com/v2/beers");
  }


}
