import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerDetails: any;
  beerId: number;

  constructor(private beerService: BeerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.beerId = this.route.snapshot.params.id || 1;
    this.getBeersDetail(this.beerId);
  }
  getBeersDetail = (beerId: number): void => {
    this.beerService.getBeerDetail(beerId).subscribe(response => {
      this.beerDetails = response[0];
    });
  }

}
