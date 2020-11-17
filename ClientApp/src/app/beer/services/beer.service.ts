import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/beer/interfaces/beer.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getAllBeers(): Observable<Beer[]> {
    
    return this.http.get<Beer[]>(environment.apiUrl +'/beers' );
    //   map((beers: any) => {
    //     return beers.map((beer) => {
    //       return {
    //         id: beer.id,
    //         name: beer.name,
    //         tagLine: beer.tagline,
    //         abv: beer.abv,
    //         imgUrl: beer.image_url,
    //         description: beer.description,
    //         firstBrewed: beer.first_brewed
            
    //       };
    //     });
    //   })
    // );
  }
  getBeer(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + '/beers/' + id);
  }
}
