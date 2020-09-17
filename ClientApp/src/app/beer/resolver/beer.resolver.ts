import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerService } from '../service/beer.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BeerOpenResolver implements Resolve<any> {

  constructor(private service: BeerService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.service.getBeerById(route.params.id);
  }
}
