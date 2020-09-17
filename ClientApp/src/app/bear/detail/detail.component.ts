import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bear } from 'src/app/interface/bear';
import { BearService } from 'src/app/services/bear/bear.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  private bearSubscription: Subscription;
  private routeSubscription: Subscription;
  bear: Bear;
  id: number;
  constructor(
    private bearService: BearService,
    private activatedRoute: ActivatedRoute,
    public loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = +atob(params.id);
      this.getBear();
    });
  }
  getBear() {
    this.loaderService.setSpinner(true);
    this.bearSubscription = this.bearService.getBearById(this.id).subscribe(result => {
      console.log(result);
      this.bear = result[0];
      this.loaderService.setSpinner(false);
    });
  }
  goback() {
    this.router.navigate(['bearlist']);
  }
  ngOnDestroy() {
    if (this.bearSubscription) {
      this.bearSubscription.unsubscribe();
    }
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
