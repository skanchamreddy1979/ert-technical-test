import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html'
})
export class BeerDetailsComponent implements OnInit {

  public beerData: Beer;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.beerData = res.beerData[0];
    });
  }
  back() {
    this.router.navigate(['beers']);
  }

}
