import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BeerDetailsComponent } from './beer-details.component';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;

  class ActiveModalMock {
    close: () => {};
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerDetailsComponent],
      providers: [{
          provide: NgbActiveModal,
          useClass: ActiveModalMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
