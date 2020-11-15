import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BeerService } from '../services/beer.service';
import { MaterialModule } from '../shared/material.module';
import { BeersListComponent } from './beers-list.component';

describe('BeersListComponent', () => {
  const fakeBeersService = { check: () => true };
  let component: BeersListComponent;
  let fixture: ComponentFixture<BeersListComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        BeersListComponent
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
    fixture = TestBed.createComponent(BeersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
