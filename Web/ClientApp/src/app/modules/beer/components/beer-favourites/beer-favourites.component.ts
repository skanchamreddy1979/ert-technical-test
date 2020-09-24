import {
  Component,
  Input,
  OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Beer } from 'src/app/core/models/beer.model';
import { BeerService } from 'src/app/core/services/beer.service';
import { TableColumn } from 'src/app/shared/components/table/table-column.model';

@Component({
  selector: 'app-beer-favourites',
  templateUrl: './beer-favourites.component.html',
  styleUrls: ['./beer-favourites.component.css']
})
export class BeerFavouriteComponent implements OnInit {

  @Input() columns: TableColumn[];
  email: string;
  beers: Observable<Beer[]>;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.columns = [
      { text: 'Name', key: 'name'},
      { text: 'Tagline', key: 'tagline'},
      { text: 'ABV', key: 'abv'},
      { text: 'First Brewed Date', key: 'first_brewed'}];
  }

  onFindClick() {
    this.beers = this.beerService.getFavourite(this.email);
  }

}
