import {
  async,
  ComponentFixture,
  TestBed } from '@angular/core/testing';

import { BeerFavouriteComponent } from './beer-favourites.component';

describe('BeerFavouriteComponent', () => {
  let component: BeerFavouriteComponent;
  let fixture: ComponentFixture<BeerFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
