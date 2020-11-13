import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/beer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue: string;

  constructor(
    private beerService: BeerService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.searchValue) {
      this.beerService.searchBeers(this.searchValue);
    } else {
      this.beerService.loadBeers();
    }
  }

}
