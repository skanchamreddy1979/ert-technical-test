import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
      .pipe(tap((user: User) => this.user.next(user)));
  }

  public signIn(email: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post<User>('https://localhost:44383/api/users/signin', JSON.stringify(email), httpOptions)
      .pipe(tap((user: User) => this.user.next(user)));
  }
}
