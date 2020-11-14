import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  private addFavouriteSubscription: Subscription;
  private deleteFavouriteSubscription: Subscription;
  private userSubscription: Subscription;

  isFavourite: boolean = false;
  isSignedIn: boolean = false;

  @Input()
  beer: Beer;

  constructor(
    private userService: UserService,
    private favouriteService: FavouriteService
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.user.subscribe((user: User) => {
      this.isSignedIn = !!user;

      if (user && user.favourites) {
        this.isFavourite = user.favourites.some(f => f.itemId == this.beer.id)
      }
    });
  }

  onAddFavouriteClick(): void {
    const favourite = new Favourite();
    favourite.itemId = this.beer.id;
    this.addFavouriteSubscription = this.favouriteService.addFavourite(favourite).subscribe();
  }

  onDeleteFavouriteClick(): void {
    const favourite = new Favourite();
    favourite.itemId = this.beer.id;
    this.deleteFavouriteSubscription = this.favouriteService.deleteFavourite(favourite).subscribe();
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }

    if (this.addFavouriteSubscription) {
      this.addFavouriteSubscription.unsubscribe();
    }

    if (this.deleteFavouriteSubscription) {
      this.deleteFavouriteSubscription.unsubscribe();
    }
  }

}
