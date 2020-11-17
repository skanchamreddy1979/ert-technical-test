import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { Favourite } from './favourite.model';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  public addFavourite(favourite: Favourite): Observable<Favourite> {
    const user = this.userService.user.value;

    if (!user || !user.userId) {
      return of(null);
    }

    return this.http.post<Favourite>(`https://localhost:44383/api/users/${user.userId}/favourites`, favourite)
      .pipe(tap((createdFavourite: Favourite) => {
        user.favourites.push(createdFavourite);
        this.userService.user.next(user);
      }));
  }

  // todo: consider simplifying this method to simply pass favourite Id or fav. beer Id.
  public deleteFavourite(favourite: Favourite): Observable<Favourite> {
    const user = this.userService.user.value;

    if (!user || !user.userId) {
      return of(null);
    }

    return this.http.delete<Favourite>(`https://localhost:44383/api/users/${user.userId}/favourites/${favourite.itemId}`)
      .pipe(tap((deletedFavourite: Favourite) => {
        const favouriteToDeleteIndex: number = user.favourites.findIndex(f => f.itemId === deletedFavourite.itemId);
        user.favourites.splice(favouriteToDeleteIndex, 1);
        this.userService.user.next(user);
      }));
  }
}
