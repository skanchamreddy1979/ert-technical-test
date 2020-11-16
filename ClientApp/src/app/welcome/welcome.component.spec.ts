import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { MaterialModule } from '../shared/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [
        MaterialModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show search', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="search"]')
    ).toBeTruthy();
  });
  it('should show BrewDog Beers', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="title_name"]')
    ).toBeTruthy();
  });
  it('should show search', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="toolbar"]')
    ).toBeTruthy();
  });
  it('should show table', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="tableData"]')
    ).toBeTruthy();
  });
  it('should show name header', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="nameheader"]')
    ).toBeTruthy();
  });
  it('should show name row data', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="namedata"]')
    ).toBeTruthy();
  });
  it('should show tagline header', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="taglineheader"]')
    ).toBeTruthy();
  });
  it('should show tagline row data', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="taglinedata"]')
    ).toBeTruthy();
  });
  it('should show abv header', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="abvheader"]')
    ).toBeTruthy();
  });
  it('should show abv row data', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="abvdata"]')
    ).toBeTruthy();
  });
  it('should show firstbrewed header', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="firstbrewedheader"]')
    ).toBeTruthy();
  });
  it('should show firstbrewed row data', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="firstbreweddata"]')
    ).toBeTruthy();
  });
});

