import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient
  ) { }

  public signUp(user: User): Observable<User> {
    return this.http.post<User>('https://localhost:44383/api/users/signup', user)
      .pipe(tap((user: User) => {
        // Saving user email in localStorage as "token" for simplicity
        localStorage.setItem('brewDogUser', JSON.stringify(user.email));
        this.user.next(user);
      }));
  }

  public signIn(email: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post<User>('https://localhost:44383/api/users/signin', JSON.stringify(email), httpOptions)
      .pipe(tap((user: User) => {
        // Saving user email in localStorage as "token" for simplicity
        localStorage.setItem('brewDogUser', JSON.stringify(user.email));
        this.user.next(user);
      }));
  }

  public signOut(): void {    
    localStorage.removeItem('brewDogUser');
    this.user.next(null);
  }

  public autoSignIn(): Observable<User> {
    // Skipping logging in if user is already loaded. This is needed because UserGuard will check for it repetitively.
    if (this.user.value) {
      return this.user;
    }

    const userEmail = JSON.parse(localStorage.getItem('brewDogUser'));

    // If no user email is stored, skip logging in, return null.
    if (!userEmail) {
      return of(null);
    }

    // If email is presented, but user is not loaded yet, sign in.
    return this.signIn(userEmail);
  }
}
