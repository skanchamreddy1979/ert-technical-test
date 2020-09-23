import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/model/beer.model';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  beer: Beer;
  beerId: number;

  constructor(private activatedRoute: ActivatedRoute, private beerService: BeerService) {
  }

  ngOnInit() {
    this.beerId = +this.activatedRoute.snapshot.params['id'];
    this.getBeer(this.beerId);
  }
  getBeer(beerId: number) {
    this.beerService.getBeerById(beerId)
      .subscribe((beer: any) => {
        if (beer != null && beer.length > 0) {
          this.beer = beer[0];
        }
      });
  }
}
