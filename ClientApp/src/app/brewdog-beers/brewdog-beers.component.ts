import { Component, OnInit } from '@angular/core';
import { BrewdogBeers } from '../../Interface/brewdog-beers';
import { BrewdogBeersService } from '../../Service/brewdog-beers.service';

@Component({
  selector: 'app-brewdog-beers',
  templateUrl: './brewdog-beers.component.html',
  styleUrls: ['./brewdog-beers.component.css']
})
export class BrewdogBeersComponent implements OnInit {

  constructor(private brewdogservice: BrewdogBeersService) { }
  brewdogBeersList: BrewdogBeers[];
  brewdogBeersInitialList: BrewdogBeers[];
  searchTerm: string;
  pageSize = 10;
  page = 1;

  ngOnInit(): void {
    this.brewdogservice.getAllBrewdogBeers().subscribe(
      data => { this.brewdogBeersList = data; this.brewdogBeersInitialList = data; },
      (err) => console.log(err)
    );
  }

  onKey(): void {
    this.brewdogBeersList = this.brewdogBeersInitialList;
    this.brewdogBeersList = this.brewdogBeersList.filter(x => x.name.toLowerCase().
      startsWith(this.searchTerm.toLowerCase()));
  }

}
