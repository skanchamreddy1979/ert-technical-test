import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrewdogserService } from './brewdogser.service';

describe('BrewdogserService', () => {
  let SERVICE: BrewdogserService;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    SERVICE = TestBed.inject(BrewdogserService);
  });

  it('should be created', () => {
    expect(SERVICE).toBeTruthy();
  });

  it('should fetch beerList ', () => {
    const SVC = new BrewdogserService(http);
    SVC.getBeerList();
    expect( SVC.getBeerList).toBeTruthy();
  });
});
