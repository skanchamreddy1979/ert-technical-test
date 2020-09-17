import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beers } from '../models/beer.model';
import { BeerService } from '../service/beer.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './beer-list.component.html'
})
export class BeerListComponent implements OnInit {

  beers: Beers[];
  cols: any[];
  totalRecords: number;
  isPagination = true;
  constructor(private beerService: BeerService, private route: Router) { }

  ngOnInit() {
    this.beerService.getBeers().subscribe((res) => {
      this.beers = res;
      console.log(this.beers);
      this.totalRecords = this.beers.length;
      console.log(this.beers.length);
    });

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'tagline', header: 'Tagline' },
      { field: 'abv', header: 'ABV' }
    ];
  }
  beerInfo(id: any) {
    this.route.navigate(['beerInfo', id]);
  }

}
