import {
  async,
  ComponentFixture,
  TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'src/app/shared/components/table/table.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { BeerFavouriteComponent } from './beer-favourites.component';
import { BeerService } from 'src/app/core/services/beer.service';

describe('BeerFavouritesComponent', () => {
  let component: BeerFavouriteComponent;
  let fixture: ComponentFixture<BeerFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerFavouriteComponent],
      imports: [
        FormsModule,
        MaterialModule,
        TableModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [BeerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
