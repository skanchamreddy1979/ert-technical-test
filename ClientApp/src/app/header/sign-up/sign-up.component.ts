import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;

  name: string;
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
    this.error = null;

    const user = new User();
    user.name = this.name;
    user.email = this.email;
    
    this.userSubscription = this.userService.signUp(user)
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
