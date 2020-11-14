import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
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
  private beerSubscription: Subscription;
  private addFavouriteSubscription: Subscription;
  private deleteFavouriteSubscription: Subscription;
  private userSubscription: Subscription;

  isFavourite: boolean = false;
  isSignedIn: boolean = false;
  beer: Beer;

  constructor(
    private route: ActivatedRoute,  
    private userService: UserService,  
    private favouriteService: FavouriteService
  ) { }

  ngOnInit() {
    this.beerSubscription = this.route.data.subscribe((data: Data) => {
      if (data.beer) {
        this.beer = data.beer;
        const user = this.userService.user.value;
        if (user) {
          this.isFavourite = user.favourites.some(f => f.itemId == this.beer.id)
        }
      }
    });

    this.userSubscription = this.userService.user.subscribe((user: User) => {
      this.isSignedIn = !!user;

      if (user && user.favourites && this.beer) {
        this.isFavourite = user.favourites.some(f => f.itemId == this.beer.id)
      }
    });
  }

  onAddFavouriteClick(): void {
    const favourite = new Favourite();
    favourite.itemId = this.beer.id;
    this.addFavouriteSubscription = this.favouriteService.addFavourite(favourite).subscribe(() => this.isFavourite = true);
  }

  onDeleteFavouriteClick(): void {
    const favourite = new Favourite();
    favourite.itemId = this.beer.id;
    this.deleteFavouriteSubscription = this.favouriteService.deleteFavourite(favourite).subscribe(() => this.isFavourite = false);
  }

  ngOnDestroy(): void {
    if (this.beerSubscription) {
      this.beerSubscription.unsubscribe();
    }

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
