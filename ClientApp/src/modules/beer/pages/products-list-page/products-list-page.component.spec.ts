import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListPageComponent } from './products-list-page.component';

describe('ProductsListPageComponent', () => {
  let component: ProductsListPageComponent;
  let fixture: ComponentFixture<ProductsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
