import {
  Component,
  OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { BeerService } from 'src/app/core/services/beer.service';
import { Beer } from 'src/app/core/models/beer.model';
import { TableColumn } from 'src/app/core/models/table-column.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: Observable<Beer[]>;
  columns: TableColumn[];
  filterValue: string;

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.fetchData();
    this.columns = [
      { text: "Name", key: 'name'},
      { text: "Tagline", key: 'tagline'},
      { text: "ABV", key: 'abv'},
      { text: "First Brewed Date", key: 'first_brewed'}];
  }

  updateList(filterValue?: string) {
    if (this.filterValue != filterValue) {
      this.filterValue = filterValue;
      this.fetchData(filterValue);
    }
  }

  fetchData(filterValue?: string) {
    this.beers = this.beerService.getMany({name: filterValue});
  }

}
