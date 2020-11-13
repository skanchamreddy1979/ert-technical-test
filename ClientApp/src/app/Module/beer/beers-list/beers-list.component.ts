import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BeerModel } from 'src/app/Model/beer-model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {
  beerList: any;
  beerLists$: Observable<BeerModel[]>;
  total$: Observable<number>;
  defaultValue: 'some_value';
  count = 0;
  toggleFevorite = false;
  constructor(public service: BeerService) { }

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
      this.beerList.map((i) => { i.isChecked = false; });
      this.service.setObservable(this.beerList);
      this.service.beerList = this.beerList;
    });
  }

  getIconCount(eleId, ischeck) {
    this.toggleFevorite = !this.toggleFevorite;
    this.beerLists$.subscribe(res => {
      const list: any[] = res;
      list.map(x => {
        if (x.id === eleId) {
          x.isChecked = true;
          this.count += 1;
          if (this.count > 5) {
            alert('can not select more than 5 fevorite');
            x.isChecked = false;
            this.count -= 1;
            return;
          }
          else if (x.id === eleId && ischeck) {
            x.isChecked = false;
          }
        }
      });
    });
  }
}
