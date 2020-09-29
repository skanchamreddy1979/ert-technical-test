import { Component, OnDestroy, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer-model';
import { BeerService } from 'src/app/services/beer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-beerdetail',
  templateUrl: './beerdetail.component.html',
  styleUrls: ['./beerdetail.component.css']
})
export class BeerdetailComponent implements OnInit, OnDestroy {

  public beer = new Beer();

  constructor(private beerService: BeerService, private activatedroute: ActivatedRoute, private route: Router) {
  }

  private subscription: Subscription;

  ngOnInit(): void {
    this.SetBeerId();
  }

  SetBeerId(): void {
    this.beer.id = +this.activatedroute.snapshot.params['id'];
    this.getBeerDetail(this.beer.id);
  }

  getBeerDetail(id: number): void {
    this.beerService.getBeerDetail(id).subscribe(
      data => { this.beer = data[0]; },
      err => console.error(err),
      () => console.log('done loading beers')
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
