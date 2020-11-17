import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

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
    this.userService.signIn(this.email)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.close.emit();
      }, () => {
        this.error = 'Failed to sign in.';
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
