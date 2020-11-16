import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../../models/beer.model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-favorites-list-page',
  templateUrl: './favorites-list-page.component.html',
  styleUrls: ['./favorites-list-page.component.css']
})
export class FavoritesListPageComponent {

  constructor(private _beerService: BeerService) { }

  public getFavoritesBeer = (name?: string): Observable<Beer[]> => {
    return this._beerService.getFavorites(name);
  }
}
