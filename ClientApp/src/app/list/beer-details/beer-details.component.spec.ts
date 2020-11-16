import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReplaySubject } from 'rxjs';
import { FavouriteService } from 'src/app/shared/user/favourite/favourite.service';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

import { BeerDetailsComponent } from './beer-details.component';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;

  let userServiceStub: any;
  let favouriteServiceStub: any;

  beforeEach(async(() => {
    userServiceStub = {
      user: new ReplaySubject<User>()
    };

    favouriteServiceStub = { };

    TestBed.configureTestingModule({
      declarations: [ BeerDetailsComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: UserService, useValue: userServiceStub },
        { provide: FavouriteService, useValue: favouriteServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
