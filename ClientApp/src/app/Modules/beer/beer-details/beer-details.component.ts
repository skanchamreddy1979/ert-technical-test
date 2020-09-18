import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {
  beerDetails: any;
  beerId: any;
  constructor(private beerService: BeerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.beerId = this.route.snapshot.params.id;
    this.getBeersDetail(this.beerId);
  }
  getBeersDetail = (beerId): void => {
    this.beerService.getBeerDetail(beerId).subscribe(response => {
      this.beerDetails = response[0];
    });
  }

}
