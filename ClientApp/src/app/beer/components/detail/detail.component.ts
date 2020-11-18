import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/beer/models/beer.model';
import { BeerService } from 'src/app/beer/services/beer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  id: number;
  beer: Beer;
  private subscription: Subscription;

  constructor(private beerService: BeerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getBeerDetails();
  }

  private getBeerDetails = (): void => {
    this.subscription = this.beerService.getBeerById(this.id).subscribe(response => {
      if (response !== null && response.length > 0) {
        this.beer = response[0];
      }
    });
  }

  public goBack = (): void => {
    this.router.navigate(['list']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
