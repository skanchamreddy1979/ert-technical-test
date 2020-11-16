import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from '../welcome/welcome.component';

let beers = [];

describe('BeerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BeerService],
    })
  );

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });

  it('should have getAllBeers function', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service.getAllBeers).toBeTruthy();
  });
  //  it('#getPromiseValue should return value from a promise',
  //   async (done: DoneFn) => {
  //     let service: BeerService = TestBed.get(BeerService);
  //     (await service.getAllBeers().toPromise()).forEach(
  //       (result: any) => {
  //         beers.push(result);
  //       }
  //     );
  //     await service.getAllBeers().toPromise().then(value => {
  //     expect(value).toBe(beers);
  //     done();
  //   });
  // });
});
