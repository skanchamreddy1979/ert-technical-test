import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingContainerComponent } from './paging-container.component';

describe('PagingContainerComponent', () => {
  let component: PagingContainerComponent;
  let fixture: ComponentFixture<PagingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
