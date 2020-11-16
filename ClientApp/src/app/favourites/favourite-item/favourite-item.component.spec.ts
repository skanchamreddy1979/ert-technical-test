import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Beer } from 'src/app/beer.model';

import { FavouriteItemComponent } from './favourite-item.component';

describe('FavouriteItemComponent', () => {
  let component: FavouriteItemComponent;
  let fixture: ComponentFixture<FavouriteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteItemComponent);
    component = fixture.componentInstance;
    component.beer = new Beer();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
