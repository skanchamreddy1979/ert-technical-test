import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesListPageComponent } from './favorites-list-page.component';

describe('FavoritesListPageComponent', () => {
  let component: FavoritesListPageComponent;
  let fixture: ComponentFixture<FavoritesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
