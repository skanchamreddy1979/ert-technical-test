import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { BeerService } from '../services';
import { Location } from '@angular/common';
import { Beer } from '../beer.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _beerService: BeerService,
    private _location: Location) { }

  private _isAlive = true;
  beer: Beer;

  ngOnInit(): void {
    this.initBeer();
  }

  initBeer(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._beerService.getSingleBeer(id)
      .pipe(takeWhile(() => this._isAlive))
      .subscribe(data => {
        this.beer = data;
      });
  }

  goBack(): void {
    this._location.back();
  }

  ngOnDestroy() {
    this._isAlive = false;
  }
}
