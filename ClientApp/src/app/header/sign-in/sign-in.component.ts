import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;
  
  email: string;  
  error: string = null;

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.userSubscription = this.userService.signIn(this.email)
      .subscribe((user: User) => {
        this.close.emit();
      }, () => {
        this.error = 'Error occured during request processing.'
      });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

}
