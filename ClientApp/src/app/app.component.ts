import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './shared/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userSubscription = this.userService.autoSignIn().subscribe();
  }  

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
