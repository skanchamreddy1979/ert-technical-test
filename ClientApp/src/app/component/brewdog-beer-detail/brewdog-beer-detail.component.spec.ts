import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewdogBeerDetailComponent } from './brewdog-beer-detail.component';

describe('BrewdogBeerDetailComponent', () => {
  let component: BrewdogBeerDetailComponent;
  let fixture: ComponentFixture<BrewdogBeerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewdogBeerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewdogBeerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
