import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/beer.service';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.css']
})
export class ListControlComponent implements OnInit {

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
