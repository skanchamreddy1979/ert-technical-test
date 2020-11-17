import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../shared/user/user.model';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  showSignUp = false;
  showSignIn = false;
  user: User = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.user
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  onSignOutClick(): void {
    this.userService.signOut();
    this.router.navigate(['/list']);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
