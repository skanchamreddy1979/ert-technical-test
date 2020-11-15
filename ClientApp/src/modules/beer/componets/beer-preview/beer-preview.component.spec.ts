import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerPreviewComponent } from './beer-preview.component';

describe('BeerPreviewComponent', () => {
  let component: BeerPreviewComponent;
  let fixture: ComponentFixture<BeerPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
