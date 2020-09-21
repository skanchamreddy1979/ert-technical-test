import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from "../../../model/beer.model";
import { BeerService } from "../../../services/beer.service";

@Component({
  selector: 'app-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  beer: Beer;
  beerId: number;

  constructor(private activatedRoute: ActivatedRoute, private beerService: BeerService) {
    this.beerId = +this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.beerService.getBeerById(this.beerId)
      .subscribe(beer => {
        this.beer = beer;
      });
  }

}
