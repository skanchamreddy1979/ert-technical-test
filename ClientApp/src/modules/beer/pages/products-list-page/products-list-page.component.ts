import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Beer } from '../../models/beer.model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.css']
})
export class ProductsListPageComponent {

  constructor(private _beerService: BeerService) { }

  public getBeer = (name?: string): Observable<Beer[]> => {
    return this._beerService.getBeers(name);
  }

}
