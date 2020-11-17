import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Beer } from '../beer.model';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  id: number;
  beer: Beer;
  notifier = new Subject();
  error: any;

  constructor(route: ActivatedRoute, private beerService: BeerService) {
    this.id = +route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.beerService.getBeerDetails(this.id)
      .subscribe(
        beers => {
          this.beer = beers[0];
        },
        error => {
          this.error = error.message;
          console.log(error);
        }
      );
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
