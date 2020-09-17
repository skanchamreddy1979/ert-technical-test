import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-beer-info',
  templateUrl: './beer-details.component.html'
})
export class BeerDetailsComponent implements OnInit {

  public beerData: any;
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
