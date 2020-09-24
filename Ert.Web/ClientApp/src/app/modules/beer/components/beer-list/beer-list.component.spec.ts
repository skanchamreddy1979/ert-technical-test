import {
  async,
  ComponentFixture,
  TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BeerListComponent } from './beer-list.component';
import { BeerService } from 'src/app/core/services/beer.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { AddFavouriteModule } from '../add-favourites-modal/add-favourites-modal.module';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerListComponent],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        FormsModule,
        TableModule,
        AddFavouriteModule,
        BrowserAnimationsModule
      ],
      providers: [BeerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
