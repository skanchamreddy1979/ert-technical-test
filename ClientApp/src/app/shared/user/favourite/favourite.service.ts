import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

    return this.http.post<Favourite>(`https://localhost:44383/api/users/${user.userId}/favourites`, favourite);
  }

  public deleteFavourite(favourite: Favourite): Observable<Favourite> {
    const user = this.userService.user.value;

    if (!user || !user.userId) {
      return of(null);
    }

    return this.http.delete<Favourite>(`https://localhost:44383/api/users/${user.userId}/favourites/${favourite.itemId}`);
  }
}
