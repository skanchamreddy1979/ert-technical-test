import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, UnsubscriptionError } from 'rxjs';
import { BeerModel } from 'src/app/Model/beer-model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit, OnDestroy{
  beerList: any;
  beerLists$: Observable<BeerModel[]>;
  total$: Observable<number>;
  subscription: Subscription;
  defaultValue: 'some_value';
  count = 0;
  isBeerListComponent = true;
  constructor(public service: BeerService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.data.subscribe(res => {
    //   this.isBeerListComponent = res && res.action === 'isBeerList' ? true : false;

    // });
    this.getAllBeers();
    this.initilizeData();
  }
  private initilizeData = (): void => {
    this.beerLists$ = this.service.beerLists$;
    this.total$ = this.service.total$;
  }
  getAllBeers = (): void => {
    this.subscription = this.service.getAllBeers().subscribe(response => {
      this.beerList = response;
      this.beerList.map((i) => { i.isChecked = false; });
      this.service.setObservable(this.beerList);
      this.service.beerList = this.beerList;
    });
  }

  getFevoriteCount(eleId, ischeck) {
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
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.beerLists$ = null;
    this.count = 0;
  }
}
