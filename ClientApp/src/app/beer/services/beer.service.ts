import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/beer/interfaces/beer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getAllBeers(): Observable<Beer[]> {
    
    return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers').pipe(
      map((beers: any) => {
        return beers.map((beer) => {
          return {
            id: beer.id,
            name: beer.name,
            tagLine: beer.tagline,
            abv: beer.abv,
            imgUrl: beer.image_url,
            description: beer.description,
            firstBrewed: beer.first_brewed,
            detailRow: false
          };
        });
      })
    );
  }
}
