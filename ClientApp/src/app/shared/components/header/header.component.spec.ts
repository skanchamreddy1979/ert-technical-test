import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create nav bar', () => {
    expect(fixture.nativeElement.querySelector('[data-test="navbar"]')).toBeTruthy();
  });

  it('should create home', () => {
    expect(fixture.nativeElement.querySelector('[data-test="home"]')).toBeTruthy();
  });

  it('should create beer list', () => {
    expect(fixture.nativeElement.querySelector('[data-test="beerlist"]')).toBeTruthy();
  });

  it('should create favourites', () => {
    expect(fixture.nativeElement.querySelector('[data-test="favourites"]')).toBeTruthy();
  });

});
