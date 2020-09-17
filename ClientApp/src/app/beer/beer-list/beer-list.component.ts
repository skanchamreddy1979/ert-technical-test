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
      { field: 'id', header: 'ID' , width: '10%'},
      { field: 'name', header: 'Name' , width: '30%'},
      { field: 'tagline', header: 'Tagline' , width: '30%'},
      { field: 'first_brewed', header: 'First Brewed' , width: '15%'},
      { field: 'abv', header: 'ABV', width: '15%' }
    ];
  }
  beerDetails(id: number) {
    this.route.navigate(['beerDetails', id]);
  }

}
