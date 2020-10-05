import { TestBed } from '@angular/core/testing';
import { BeersService } from './beers.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { doesNotReject } from 'assert';

describe('BeersService', () => {
  let beersService: BeersService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports : [
      HttpClientTestingModule
    ],
    providers: [BeersService]
  }));

  beforeEach(() => {
    beersService = TestBed.get(BeersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: BeersService = TestBed.get(BeersService);
    expect(service).toBeTruthy();
  });

  it('fetch all beers', () => {
    const mockResponse = [
      { id: 0, name: '', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }
    ];
    beersService.Get('', 1).subscribe(data => {
      expect(mockResponse.length).toEqual(1);
    });
  });

  it('fetch beers by name', () => {
    const mockResponse = [
      { id: 0, name: '', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }
    ];
    beersService.Get('A', 1).subscribe(data => {
      expect(mockResponse.length).toEqual(1);
    });
  });

  it('fetch beer by id', () => {
    beersService.GetById(1).subscribe(data => {
      expect(data.length).toEqual(1);
    });
  });

});
