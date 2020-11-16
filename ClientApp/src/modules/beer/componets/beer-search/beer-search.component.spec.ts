import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerSearchComponent } from './beer-search.component';

describe('BeerSearchComponent', () => {
  let component: BeerSearchComponent;
  let fixture: ComponentFixture<BeerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
