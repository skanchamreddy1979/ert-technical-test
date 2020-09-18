import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerNavMenuComponent } from './beer-nav-menu.component';

describe('BeerNavMenuComponent', () => {
  let component: BeerNavMenuComponent;
  let fixture: ComponentFixture<BeerNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
