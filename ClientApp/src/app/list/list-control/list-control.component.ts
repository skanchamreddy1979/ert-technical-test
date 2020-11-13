import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/beer.service';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.css']
})
export class ListControlComponent implements OnInit {

  searchValue: string;
  page: number = 1;
  perPage: number = 10;

  constructor(
    private beerService: BeerService
  ) { }

  ngOnInit() {
    this.beerService.loadBeers(this.page, this.perPage);
  }

  onSubmit() {
    if (this.searchValue) {
      this.beerService.searchBeers(this.searchValue, this.page, this.perPage);
    } else {
      this.beerService.loadBeers(this.page, this.perPage);
    }
  }
}
