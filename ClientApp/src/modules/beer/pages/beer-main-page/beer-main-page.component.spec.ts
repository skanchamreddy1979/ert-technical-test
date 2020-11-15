import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerMainPageComponent } from './beer-main-page.component';

describe('BeerMainPageComponent', () => {
  let component: BeerMainPageComponent;
  let fixture: ComponentFixture<BeerMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
