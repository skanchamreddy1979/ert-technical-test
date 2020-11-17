import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BeerService } from '../beer-services/beer.service';

describe('ListComponent', () => {
  const fakeBeersService = { check: () => true };
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        ListComponent
      ],
      imports: [
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule
      ],
      providers: [
        { provide: BeerService, useValue: fakeBeersService }
      ]
    }).compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
