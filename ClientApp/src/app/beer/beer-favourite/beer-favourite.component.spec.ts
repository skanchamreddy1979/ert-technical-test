import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerFavouriteComponent } from './beer-favourite.component';

fdescribe('BeerFavouriteComponent', () => {
  let component: BeerFavouriteComponent;
  let fixture: ComponentFixture<BeerFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerFavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
