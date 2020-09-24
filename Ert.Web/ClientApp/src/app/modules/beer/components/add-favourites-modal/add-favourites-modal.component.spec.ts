import {
  async,
  ComponentFixture,
  TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BeerService } from 'src/app/core/services/beer.service';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { AddFavouritesModalComponent } from './add-favourites-modal.component';

describe('AddFavouritesModalComponent', () => {
  let component: AddFavouritesModalComponent;
  let fixture: ComponentFixture<AddFavouritesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddFavouritesModalComponent],
      imports: [
        FormsModule,
        MaterialModule,
        TableModule,
        DirectivesModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        BeerService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavouritesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
