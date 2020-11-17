import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReplaySubject } from 'rxjs';
import { User } from '../shared/user/user.model';
import { UserService } from '../shared/user/user.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let userServiceStub: UserService;
  let router: Router;

  beforeEach(async(() => {
    userServiceStub = {
      ...jasmine.createSpyObj('UserService', ['signOut']),
      user: new ReplaySubject<User>()
    };

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: UserService, useValue: userServiceStub }
      ]
    })
    .compileComponents();

    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no user defined after initialization', () => {
    expect(component.user).toBeNull();
  });

  it('should update user when it changes', fakeAsync(() => {
    userServiceStub.user.next({ userId: 1 } as User);
    tick();
    expect(component.user).toBeTruthy();
    expect(component.user.userId).toBe(1);
  }));

  it('should sign out user when Sign Out is clicked', () => {
    spyOn(router, 'navigate');
    component.onSignOutClick();
    expect(userServiceStub.signOut).toHaveBeenCalled();
  });

  it('should navigate to List when user signs out', () => {
    spyOn(router, 'navigate');
    component.onSignOutClick();
    expect(router.navigate).toHaveBeenCalledWith(['/list']);
  });
});
