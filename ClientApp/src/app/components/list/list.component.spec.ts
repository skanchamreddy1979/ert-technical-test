import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrewDogBeerService } from 'src/app/services/brewDogBeers.service';
import { SearchComponent } from '../search/search.component';
import { MaterialModule } from 'src/app/shared/material.module';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, SearchComponent],
      imports: [MaterialModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
      providers: [BrewDogBeerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css (".beers-table"));
    element = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a table to display the beer', () => {
    expect(element.innerHTML).toContain("thead");
    expect(element.innerHTML).toContain("tbody");
  });
});
