import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BrewdogserService } from './brewdogser.service';

describe('BrewdogserService', () => {
  let service: BrewdogserService;
  let http : HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewdogserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch beerList ', () => {
    let service = new BrewdogserService(http);;
    service.getBeerList();
    expect( service.getBeerList).toBeTruthy();
  });


});
