import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BearListComponent } from './bear-list.component';

describe('BearListComponent', () => {
  let component: BearListComponent;
  let fixture: ComponentFixture<BearListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
