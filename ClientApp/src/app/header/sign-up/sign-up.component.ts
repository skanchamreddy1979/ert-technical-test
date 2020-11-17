import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

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

    this.userService.signUp(user)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.close.emit();
      }, () => {
        this.error = 'Failed to sign up.';
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
