import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerSharedListComponent } from './beer-shared-list.component';

describe('BeerListComponent', () => {
  let component: BeerSharedListComponent;
  let fixture: ComponentFixture<BeerSharedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerSharedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerSharedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
