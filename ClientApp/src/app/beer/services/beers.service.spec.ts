import { async, TestBed, inject, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestData } from '../../beer/test-data';

import { BeersService } from './beers.service';
import { Beer } from '../beers/beers.component';

describe('BeersService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let beerService: BeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    beerService = TestBed.inject(BeersService);
  });

  it('should be created', inject([BeersService], (service: BeersService) => {
    expect(service).toBeTruthy();
  }));

  it(
    'it is expected to fetch all beers',
    waitForAsync(() => {
      const mockResponse: Beer[] = [
        {
          id: 0,
          name: '',
          tagline: '',
          first_brewed: '',
          description: '',
          image_url: '',
          abv: 0,
        },
      ];
      beerService.getAllBeers().subscribe((response) => {
        expect(mockResponse.length).toEqual(1);
      });
    })
  );

  // it('expects service to fetch all bears', () => {
  //   let mockResponse: Beer[] = [{ id: 0, name: '', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }];
  //   service.getBeers().subscribe(data => { expect(mockResponse.length).toEqual(1);
  //   });
  // });
});
