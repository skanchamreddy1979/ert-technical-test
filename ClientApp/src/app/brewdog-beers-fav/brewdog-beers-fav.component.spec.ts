import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewdogBeersFavComponent } from './brewdog-beers-fav.component';

describe('BrewdogBeersFavComponent', () => {
  let component: BrewdogBeersFavComponent;
  let fixture: ComponentFixture<BrewdogBeersFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewdogBeersFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewdogBeersFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
