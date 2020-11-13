import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/beer.model';
import { BeerService } from 'src/app/shared/beer.service';

@Injectable({
  providedIn: 'root'
})
export class BeerDetailsResolverService implements Resolve<Beer> {

  constructor(
    private beerService: BeerService,
    private router: Router
  ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Beer> {
    const beerId = +route.paramMap.get('id');
    if (beerId) {
      return this.beerService.loadBeer(beerId);
    } else {
      // todo: proper handling here
      this.router.navigate(['/list']);
    }
  }
}
