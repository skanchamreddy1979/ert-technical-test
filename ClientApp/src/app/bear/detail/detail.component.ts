import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/interface/beer';
import { BeerService } from 'src/app/services/beer/beer.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  private beerSubscription: Subscription;
  private routeSubscription: Subscription;
  beer: Beer;
  id: number;
  constructor(
    private beerService: BeerService,
    private activatedRoute: ActivatedRoute,
    public loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = +atob(params.id);
      this.getbeer();
    });
  }
  getBeer() {
    this.loaderService.setSpinner(true);
    this.beerSubscription = this.beerService.getBeerById(this.id).subscribe(result => {
      console.log(result);
      this.beer = result[0];
      this.loaderService.setSpinner(false);
    });
  }
  goback() {
    this.router.navigate(['beerlist']);
  }
  ngOnDestroy() {
    if (this.beerSubscription) {
      this.beerSubscription.unsubscribe();
    }
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
