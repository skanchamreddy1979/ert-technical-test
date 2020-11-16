import {Component, Input, OnInit} from '@angular/core';
import {Beer} from "../../models/beer.model";
import {ActivatedRoute} from "@angular/router";
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.css']
})
export class DetailedPageComponent implements OnInit {

  beer: Beer;

  constructor(
    private route: ActivatedRoute,
    private _beerService: BeerService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._beerService.getOneBeer(id)
      .subscribe(result => {
        this.beer = result;
        console.log(result);
      });
  }

}
