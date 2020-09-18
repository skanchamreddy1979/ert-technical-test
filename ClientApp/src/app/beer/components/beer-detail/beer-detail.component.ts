import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/beer/interface/beer';
import { BeerService } from 'src/app/beer/services/beer/beer.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private beerSubscription: Subscription;
  beer: Beer;
  id: number;
  constructor(
    private beerService: BeerService,
    private activatedRoute: ActivatedRoute,
    public loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.intializeGetParam();
  }

  private intializeGetParam = (): void => {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.id = +atob(params.id);
      this.getBeer();
    });
  }

  private getBeer = (): void => {
    this.loaderService.setSpinner(true);
    this.beerSubscription = this.beerService.getBeerById(this.id).subscribe(result => {
      console.log(result);
      this.beer = result[0];
      this.loaderService.setSpinner(false);
    });
  }
  private goback = (): void => {
    this.router.navigate(['beerlist']);
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.beerSubscription) {
      this.beerSubscription.unsubscribe();
    }
  }

}
