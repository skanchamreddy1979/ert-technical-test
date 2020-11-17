import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

  private unsubscribe = new Subject();

  hasNoFavourites = false;
  beers: Beer[] = [];

  constructor(
    private userService: UserService,
    private beerService: BeerService
  ) { }

  ngOnInit() {
    this.userService.user
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((user: User) => {
        if (user && user.favourites && user.favourites.length) {
          this.hasNoFavourites = false;
          const favouriteBeersIds = user.favourites.map(f => f.itemId);
          this.beerService.loadBeersByIds(favouriteBeersIds)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((beers: Beer[]) => {
              this.beers = beers;
            });
        } else {
          this.hasNoFavourites = true;
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
