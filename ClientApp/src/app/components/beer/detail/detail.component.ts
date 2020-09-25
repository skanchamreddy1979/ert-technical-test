import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/models/beer.model';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  selectedBeer: Beer;
  id: number;
  
  constructor(private _beerService: BeerService, public _route: ActivatedRoute) {
    this.id = +this._route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.getBeer();
  }

  getBeer(): void {
    this._beerService.getBeerById(this.id)
      .subscribe(beer => this.selectedBeer = beer);
  }

}
