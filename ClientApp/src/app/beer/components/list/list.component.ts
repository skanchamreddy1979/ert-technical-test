import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BeerService } from 'src/app/beer/services/beer.service';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  beers: Beer[];
  allBeers: Beer[];
  private subscription: Subscription;

  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
    this.getBeersData();
  }

  public getBeersData = (): void => {
    this.subscription = this.beerService.getAllBeers().subscribe(response => {
      if (response !== null) {
        this.setBeers(response);
        this.allBeers = response;
      }
    });
  }

  public applyFilter = (filterValue: string): void => {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    const filteredBeers = this.allBeers.filter(beer => beer.name.toLowerCase().includes(filterValue));
    this.setBeers(filteredBeers);
  }

  private setBeers = (beersList: Beer[]): void => {
    this.beers = beersList;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
