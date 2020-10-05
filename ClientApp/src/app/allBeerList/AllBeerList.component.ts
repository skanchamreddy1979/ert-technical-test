import { Component, OnInit } from '@angular/core';
import { BeerService } from "../Services/beer.service";
import { IBeer } from "../beer.model";

@Component({
  selector: 'app-allBeers',
  templateUrl: './allBeerList.component.html',
  styleUrls: ['./allBeerList.component.css']
})
export class AllBeerListComponent implements OnInit {
  allBeers: IBeer[];

  constructor(private beerService: BeerService) { }
  ngOnInit() {
    this.beerService.getBeers().subscribe(beers => this.allBeers = beers);
  }

}
