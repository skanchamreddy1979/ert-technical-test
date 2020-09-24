import {
  Component,
  OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { MatDialog } from '@angular/material/dialog';

import { BeerService } from 'src/app/core/services/beer.service';
import { Beer } from 'src/app/core/models/beer.model';
import { TableColumn } from 'src/app/shared/table/table-column.model';
import { AddFavouriteModalComponent } from './add-favourite-modal/add-favourite-modal.component';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: Observable<Beer[]>;
  columns: TableColumn[];
  filterValue = '';
  selectedBeers: Beer[];

  constructor(private beerService: BeerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchData();
    this.columns = [
      { text: 'Name', key: 'name'},
      { text: 'Tagline', key: 'tagline'},
      { text: 'ABV', key: 'abv'},
      { text: 'First Brewed Date', key: 'first_brewed'}];
  }

  updateList(filterValue?: string) {
    if (this.filterValue !== filterValue) {
      this.filterValue = filterValue;
      this.fetchData(filterValue);
    }
  }

  fetchData(filterValue?: string) {
    this.beers = this.beerService.getMany({name: filterValue});
  }

  onSelectionChange(rows: Beer[]) {
    this.selectedBeers = rows;
  }

  onAddFavouriteClick() {
    this.dialog.open(AddFavouriteModalComponent, {
      disableClose: true,
      data: {
        selected: this.selectedBeers
      }
    });
  }

}
