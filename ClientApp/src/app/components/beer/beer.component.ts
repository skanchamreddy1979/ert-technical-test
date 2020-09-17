import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/models/beer.model';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beer: Beer;
  beerId: number;

  constructor(private route: ActivatedRoute, private beerService: BeerService) {
    this.beerId = +this.route.snapshot.params['beerId'];
  }

  ngOnInit() {
    console.log(this.beerId);
    this.beerService
      .getBeerById(this.beerId)
      .subscribe(beer => {
        console.log(beer);
        this.beer = beer;
      });
  }

}
