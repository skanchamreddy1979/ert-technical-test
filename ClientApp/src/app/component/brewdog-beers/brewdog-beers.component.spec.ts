import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewdogBeersComponent } from './brewdog-beers.component';

describe('BrewdogBeersComponent', () => {
  let component: BrewdogBeersComponent;
  let fixture: ComponentFixture<BrewdogBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewdogBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewdogBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
