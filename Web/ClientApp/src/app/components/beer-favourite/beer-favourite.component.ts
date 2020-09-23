import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Beer } from 'src/app/core/models/beer.model';
import { BeerService } from 'src/app/core/services/beer.service';
import { TableColumn } from 'src/app/shared/table/table-column.model';

@Component({
  selector: 'app-beer-favourite',
  templateUrl: './beer-favourite.component.html',
  styleUrls: ['./beer-favourite.component.css']
})
export class BeerFavouriteComponent implements OnInit {

  email: string;
  beers: Observable<Beer[]>;
  columns: TableColumn[];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.columns = [
      { text: "Name", key: 'name'},
      { text: "Tagline", key: 'tagline'},
      { text: "ABV", key: 'abv'},
      { text: "First Brewed Date", key: 'first_brewed'}];
  }

  onFindClick() {
    this.beers = this.beerService.getFavourite(this.email);
  }

}
