import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beer } from '../beer.model';
import { BeerService } from '../shared/beer.service';
import { User } from '../shared/user/user.model';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;
  private beerSubscription: Subscription;

  hasNoFavourites = false;
  beers: Beer[] = [];

  constructor(
    private userService: UserService,
    private beerService: BeerService
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.user.subscribe((user: User) => {
      if (user && user.favourites && user.favourites.length) {
        this.hasNoFavourites = false;
        const favouriteBeersIds = user.favourites.map(f => f.itemId);
        this.beerSubscription = this.beerService.loadBeersByIds(favouriteBeersIds)
          .subscribe((beers: Beer[]) => {
            this.beers = beers;
          });
      } else {
        this.hasNoFavourites = true;
      }
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.beerSubscription) {
      this.beerSubscription.unsubscribe();
    }
  }

}
