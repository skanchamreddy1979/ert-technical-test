import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { Beer } from '../beer.model';

import { BeerService } from './beer.service';
import { BeerDtoMapperService } from './punk-api/beer-dto-mapper.service';
import { BeerDto } from './punk-api/beer-dto.model';
import { PunkApiParamType } from './punk-api/punk-api-param-type.enum';
import { PunkApiService } from './punk-api/punk-api.service';

describe('BeerService', () => {
  let beerService: BeerService;
  let beerDtoMapperService: jasmine.SpyObj<BeerDtoMapperService>;
  let punkApiService: jasmine.SpyObj<PunkApiService>;

  beforeEach(() => {
    beerDtoMapperService = jasmine.createSpyObj('BeerDtoMapperService', ['mapBeerDto']);
    punkApiService = jasmine.createSpyObj('PunkApiService', ['getBeers', 'getBeer']);

    TestBed.configureTestingModule({
      providers: [
        { provide: BeerDtoMapperService, useValue: beerDtoMapperService },
        { provide: PunkApiService, useValue: punkApiService }
      ]
    });

    beerService = TestBed.get(BeerService);
  });

  it('should be created', () => {
    expect(beerService).toBeTruthy();
  });

  it('should getBeers from PunkApiService when loadBeers is called', fakeAsync(() => {
    punkApiService.getBeers.and.returnValue(of([]));
    beerService.loadBeers();
    tick();
    expect(punkApiService.getBeers).toHaveBeenCalled();
  }));

  it('should getBeers from PunkApiService with pagination parameters when loadBeers is called with pagination parameters', fakeAsync(() => {
    punkApiService.getBeers.and.returnValue(of([]));
    beerService.loadBeers(1, 10);
    tick();
    expect(punkApiService.getBeers).toHaveBeenCalled();
    const getBeersArguments = punkApiService.getBeers.calls.mostRecent().args;
    expect(getBeersArguments).toBeTruthy();
    expect(getBeersArguments.length).toBe(1);
    expect(getBeersArguments[0]).toBeTruthy();
    expect(getBeersArguments[0].has(PunkApiParamType.Page)).toBe(true);
    expect(getBeersArguments[0].get(PunkApiParamType.Page)).toBe(1);
    expect(getBeersArguments[0].has(PunkApiParamType.PerPage)).toBe(true);
    expect(getBeersArguments[0].get(PunkApiParamType.PerPage)).toBe(10);
  }));

  it('should getBeers from PunkApiService with search value when loadBeers is called with search value', fakeAsync(() => {
    punkApiService.getBeers.and.returnValue(of([]));
    beerService.loadBeers(1, 10, 'test search value');
    tick();
    expect(punkApiService.getBeers).toHaveBeenCalled();
    const getBeersArguments = punkApiService.getBeers.calls.mostRecent().args;
    expect(getBeersArguments).toBeTruthy();
    expect(getBeersArguments.length).toBe(1);
    expect(getBeersArguments[0]).toBeTruthy();
    expect(getBeersArguments[0].has(PunkApiParamType.BeerName)).toBe(true);
    expect(getBeersArguments[0].get(PunkApiParamType.BeerName)).toBe('test_search_value');
  }));

  it('should map BeerDto object received from PunkApi service to Beer model when loadBeers is called', fakeAsync(() => {
    const beerDto = new BeerDto();
    beerDto.id = 1;
    punkApiService.getBeers.and.returnValue(of([beerDto]));
    beerService.loadBeers();
    tick();
    expect(beerDtoMapperService.mapBeerDto).toHaveBeenCalledWith(beerDto);
  }));

  it('should emit loaded beers when loadBeers is called', fakeAsync(() => {
    var emittedBeers: Beer[];
    const beerDto = new BeerDto();
    beerDto.id = 1;
    punkApiService.getBeers.and.returnValue(of([beerDto]));
    const mappedBeer = new Beer();
    mappedBeer.id = 1;
    beerDtoMapperService.mapBeerDto.and.returnValue(mappedBeer)
    beerService.beersChanged.subscribe(beers => emittedBeers = beers);
    beerService.loadBeers();
    tick();
    expect(emittedBeers).toBeTruthy();
    expect(emittedBeers.length).toBe(1);
    expect(emittedBeers[0]).toBe(mappedBeer);
  }));

  it('should getBeers from PunkApiService with list of Ids when loadBeersByIds is called', fakeAsync(() => {
    punkApiService.getBeers.and.returnValue(of([]));
    beerService.loadBeersByIds([1, 2, 3]).subscribe();
    tick();
    expect(punkApiService.getBeers).toHaveBeenCalled();
    const getBeersArguments = punkApiService.getBeers.calls.mostRecent().args;
    expect(getBeersArguments).toBeTruthy();
    expect(getBeersArguments.length).toBe(1);
    expect(getBeersArguments[0]).toBeTruthy();
    expect(getBeersArguments[0].has(PunkApiParamType.Ids)).toBe(true);
    expect(getBeersArguments[0].get(PunkApiParamType.Ids)).toBe('1|2|3');
  }));

  it('should map BeerDto object received from PunkApi service to Beer model when loadBeersByIds is called', fakeAsync(() => {
    const beerDto = new BeerDto();
    beerDto.id = 1;
    punkApiService.getBeers.and.returnValue(of([beerDto]));
    beerService.loadBeersByIds([1]).subscribe();
    tick();
    expect(beerDtoMapperService.mapBeerDto).toHaveBeenCalledWith(beerDto);
  }));

  it('should return Observable of mapped beers when loadBeersByIds is called', fakeAsync(() => {
    var emittedBeers: Beer[];
    const beerDto = new BeerDto();
    beerDto.id = 1;
    punkApiService.getBeers.and.returnValue(of([beerDto]));
    const mappedBeer = new Beer();
    mappedBeer.id = 1;
    beerDtoMapperService.mapBeerDto.and.returnValue(mappedBeer)
    beerService.loadBeersByIds([1]).subscribe(beers => emittedBeers = beers);
    tick();
    expect(emittedBeers).toBeTruthy();
    expect(emittedBeers.length).toBe(1);
    expect(emittedBeers[0]).toBe(mappedBeer);
  }));

  it('should call getBeer of PunkApiService with specified Id when loadBeer is called', fakeAsync(() => {
    punkApiService.getBeer.and.returnValue(of(new BeerDto()));
    beerService.loadBeer(1).subscribe();
    tick();
    expect(punkApiService.getBeer).toHaveBeenCalledWith(1);
  }));

  it('should map BeerDto object received from PunkApi service to Beer model when loadBeer is called', fakeAsync(() => {
    const beerDto = new BeerDto();
    beerDto.id = 1;
    punkApiService.getBeer.and.returnValue(of(beerDto));
    beerService.loadBeer(1).subscribe();
    tick();
    expect(beerDtoMapperService.mapBeerDto).toHaveBeenCalledWith(beerDto);
  }));

  it('should return Observable of mapped beers when loadBeersByIds is called', fakeAsync(() => {
    var emittedBeer: Beer;
    const beerDto = new BeerDto();
    beerDto.id = 1;
    punkApiService.getBeer.and.returnValue(of(beerDto));
    const mappedBeer = new Beer();
    mappedBeer.id = 1;
    beerDtoMapperService.mapBeerDto.and.returnValue(mappedBeer)
    beerService.loadBeer(1).subscribe(beer => emittedBeer = beer);
    tick();
    expect(emittedBeer).toBe(mappedBeer);
  }));
});
