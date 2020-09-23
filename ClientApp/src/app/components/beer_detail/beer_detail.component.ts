import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/models/beer.model';
import { PunkApiService } from 'src/app/services/punkapi.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer_detail.component.html',
  styleUrls: ['./beer_detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  beer: Beer;
  beerId: number;

  constructor(private _router: ActivatedRoute, private _pukApiService: PunkApiService) {
    this.beerId = +this._router.snapshot.params['id'];
  }
  
  ngOnInit() {
    this._pukApiService.getBeerById(this.beerId)
      .subscribe(beer => {
        this.beer = beer;
      });
  }

}
