import { Component, OnInit } from '@angular/core';
import { Beer } from '../Models/beer';
import { BeerService } from '../Services/beer.service';

@Component({
  selector: 'app-favorite-beers',
  templateUrl: './favorite-beers.component.html',
  styleUrls: ['./favorite-beers.component.css']
})
export class FavoriteBeersComponent implements OnInit {
beers: Beer[] = [];
  constructor( private beerService: BeerService) { }

  ngOnInit() {
  }

}
