import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerModel } from 'src/app/Models/beer-model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit {
  beerList: any;
  beerLists$: Observable<BeerModel[]>;
  total$: Observable<number>;
  // totalRecords: number;
  // total: number;
  constructor(public service: BeerService) {

  }

  ngOnInit(): void {
    this.getAllBeers();
    this.initilizeData();
  }
  private initilizeData = (): void => {
    this.beerLists$ = this.service.beerLists$;
    this.total$ = this.service.total$;
  }
  getAllBeers = (): void => {
    this.service.getAllBeers().subscribe(response => {
      this.beerList = response;
      this.service.setObservable(this.beerList);
      this.service.beerList = this.beerList;
    });
  }
}
