import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Beer } from 'src/app/beer.model';
import { Favourite } from 'src/app/shared/user/favourite/favourite.model';
import { FavouriteService } from 'src/app/shared/user/favourite/favourite.service';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject();

  isFavourite = false;
  isSignedIn = false;
  beer: Beer;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private favouriteService: FavouriteService
  ) { }

  ngOnInit() {
    this.route.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: Data) => {
        if (data.beer) {
          this.beer = data.beer;
          const user = this.userService.user.value;
          this.isFavourite = user
            ? user.favourites.some(f => f.itemId === this.beer.id)
            : false;
        }
      });

    this.userService.user
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((user: User) => {
        this.isSignedIn = !!user;
        this.isFavourite = user && user.favourites && this.beer
          ? user.favourites.some(f => f.itemId === this.beer.id)
          : false;
      });
  }

  onAddFavouriteClick(): void {
    const favourite = new Favourite();
    favourite.itemId = this.beer.id;
    this.favouriteService.addFavourite(favourite)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe();
  }

  onDeleteFavouriteClick(): void {
    const favourite = new Favourite();
    favourite.itemId = this.beer.id;
    this.favouriteService.deleteFavourite(favourite)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
