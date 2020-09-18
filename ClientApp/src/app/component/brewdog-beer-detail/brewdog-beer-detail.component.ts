import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrewdogBeers } from '../../interface/brewdog-beers';
import { BrewdogBeersService } from '../../service/brewdog-beers.service';


@Component({
  selector: 'app-brewdog-beer-detail',
  templateUrl: './brewdog-beer-detail.component.html',
  styleUrls: ['./brewdog-beer-detail.component.css']
})
export class BrewdogBeerDetailComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute, private brewdogservice: BrewdogBeersService) { }
  id: number;
  routeSubscription: Subscription;
  brewdogBeerDetailSubscription: Subscription;
  brewdogbeers: BrewdogBeers[];

  ngOnInit(): void {
    this.intializeGetParam();
  }

  private intializeGetParam = (): void => {
    this.routeSubscription = this.route.paramMap.subscribe(data => this.id = +data.get('id'));
    this.brewdogBeerDetailSubscription = this.brewdogservice.getBrewdogBeerDetail(this.id).subscribe(
      data => this.brewdogbeers = data
    );
  }
   ngOnDestroy = (): void => {
    if (this.routeSubscription) { this.routeSubscription.unsubscribe(); }
    if (this.brewdogBeerDetailSubscription) { this.brewdogBeerDetailSubscription.unsubscribe(); }
  }

}
