import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BeerDto } from './beer-dto.model';
import { PunkApiParamType } from './punk-api-param-type.enum';

@Injectable({
  providedIn: 'root'
})
export class PunkApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getBeers(parameters?: Map<PunkApiParamType, string | number>): Observable<BeerDto[]> {
    var httpParams = new HttpParams();

    if (parameters && parameters.size) {
      parameters.forEach((value: string, key: PunkApiParamType) => {
        httpParams = httpParams.append(key.toString(), value.toString());
      });
    }

    return this.http.get<BeerDto[]>('https://api.punkapi.com/v2/beers', { params: httpParams });
  }

  public getBeer(id: number): Observable<BeerDto> {
    return this.http.get<BeerDto[]>(`https://api.punkapi.com/v2/beers/${id}`).pipe(map((beerDtos: BeerDto[]) => beerDtos[0]));
  }
}
