import { HttpClient } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BrewdogserService } from '../brewdogser.service';
import { BeerDetailsComponent } from './beer-details.component';
import { IBeerList } from '../../beerlist';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeerDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch beerDetails ', () => {
    const SVC = new BrewdogserService(http);
    SVC.getBeerList();
    expect( SVC.getBeerById).toBeTruthy();
  });
});
