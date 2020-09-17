import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from '../models/beer.model';
import { BeerService } from '../service/beer.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './beer-list.component.html'
})
export class BeerListComponent implements OnInit {

  beers: Beer[];
  cols: any[];
  totalRecords: number;
  isPagination = true;
  constructor(private beerService: BeerService, private route: Router) { }

  ngOnInit() {
    this.beerService.getBeers().subscribe((res) => {
      this.beers = res;
      this.totalRecords = this.beers.length;
    });

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'tagline', header: 'Tagline' },
      { field: 'abv', header: 'ABV' }
    ];
  }
  beerDetails(id: number) {
    this.route.navigate(['beerDetails', id]);
  }

}
