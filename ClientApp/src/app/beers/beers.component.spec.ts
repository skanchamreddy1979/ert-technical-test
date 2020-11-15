import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeerService } from '../services/beer.service';
import { MaterialModule } from '../shared/material.module';
import { BeersComponent } from './beers.component';


describe('BeersComponent', () => {
  const fakeBeersService = { check: () => true };
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        BeersComponent
      ],
      imports: [
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: BeerService, useValue: fakeBeersService }
      ]
    }).compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(BeersComponent).toBeTruthy();
  });
});
