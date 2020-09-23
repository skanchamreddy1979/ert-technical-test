import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerFavoritesComponent } from './beer-favorites.component';

describe('BeerFavoritesComponent', () => {
  let component: BeerFavoritesComponent;
  let fixture: ComponentFixture<BeerFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
