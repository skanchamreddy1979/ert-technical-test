import { Component, OnInit } from '@angular/core';
import { BeerService } from "../Services/beer.service";
import { IBeer } from "../beer.model";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favoriteBeers: IBeer[];
  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getFavorites().subscribe(beers => this.favoriteBeers = beers);
  }

}
