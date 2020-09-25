import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-allbeers',
  templateUrl: './list-allbeers.component.html',
  styleUrls: ['./list-allbeers.component.css']
})
export class ListAllbeersComponent implements OnInit, OnDestroy {

  public p = 0;
  beers: any;
  beerName: string;
  filteredBeers: any;
  public filtered;
  totalrecords: number;

  constructor(private beerService: BeerService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.beers = [];
    this.filteredBeers = [];
  }

  private subscription: Subscription;

  ngOnInit(): void {
    this.getAllbeers();
  }

  getAllbeers(): void {
    this.beerService.getBeers().subscribe(
      data => {
        this.beers = data,
          this.totalrecords = this.beers.length;
      },
      err => console.error(err),
      () => console.log('done loading beers'));
  }

  public goToBeer(beer: any): void {
    this.router.navigate([beer.id], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
