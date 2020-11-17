import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Beer } from 'src/app/beer.model';
import { Favourite } from 'src/app/shared/user/favourite/favourite.model';
import { FavouriteService } from 'src/app/shared/user/favourite/favourite.service';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  isFavourite = false;
  isSignedIn = false;

  @Input()
  beer: Beer;

  constructor(
    private userService: UserService,
    private favouriteService: FavouriteService
  ) { }

  ngOnInit() {
    this.userService.user
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((user: User) => {
        this.isSignedIn = !!user;
        this.isFavourite = user && user.favourites
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

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
