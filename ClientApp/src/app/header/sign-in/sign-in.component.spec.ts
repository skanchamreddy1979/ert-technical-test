import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports: [ FormsModule ],
      providers: [ 
        { provide: UserService, useValue: jasmine.createSpyObj('UserService', ['signIn']) } 
      ]
    })
    .compileComponents();

    userService = TestBed.get(UserService) as jasmine.SpyObj<UserService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
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

  it('should sign in user with specified email on Submit click', () => {
    userService.signIn.and.returnValue(of(new User()));
    component.email = 'test@test.com';
    component.onSubmit();
    expect(userService.signIn).toHaveBeenCalledWith('test@test.com');
  });

  it('should emit close event after successfull login on Submit click', () => {
    userService.signIn.and.returnValue(of(new User()));
    spyOn(component.close, 'emit');
    component.onSubmit();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should not emit close event after failed login on Submit click', () => {
    userService.signIn.and.returnValue(throwError({}));
    spyOn(component.close, 'emit');
    component.onSubmit();
    expect(component.close.emit).not.toHaveBeenCalled();
  });

  it('should set the error after failed login on Submit click', () => {
    userService.signIn.and.returnValue(throwError({}));
    component.onSubmit();
    expect(component.error).toBe('Failed to sign in.');
  });
});
