import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [FormsModule],
      providers: [
        { provide: UserService, useValue: jasmine.createSpyObj('UserService', ['signUp']) }
      ]
    })
    .compileComponents();

    userService = TestBed.get(UserService) as jasmine.SpyObj<UserService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close event on Close click', () => {
    spyOn(component.close, 'emit');
    component.onClose();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should sign up user with specified name and email on Submit click', () => {
    userService.signUp.and.returnValue(of(new User()));
    component.email = 'test@test.com';
    component.name = 'Test';
    component.onSubmit();
    expect(userService.signUp).toHaveBeenCalled();
    const signUpCallArguments = userService.signUp.calls.mostRecent().args;
    expect(signUpCallArguments).toBeTruthy();
    expect(signUpCallArguments[0]).toBeTruthy();
    expect(signUpCallArguments[0].name).toBe('Test');
    expect(signUpCallArguments[0].email).toBe('test@test.com');
  });

  it('should emit close event after successfull sign up on Submit click', () => {
    userService.signUp.and.returnValue(of(new User()));
    spyOn(component.close, 'emit');
    component.onSubmit();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should not emit close event after failed sign up on Submit click', () => {
    userService.signUp.and.returnValue(throwError({}));
    spyOn(component.close, 'emit');
    component.onSubmit();
    expect(component.close.emit).not.toHaveBeenCalled();
  });

  it('should set the error after failed sign up on Submit click', () => {
    userService.signUp.and.returnValue(throwError({}));
    component.onSubmit();
    expect(component.error).toBe('Failed to sign up.');
  });
});
