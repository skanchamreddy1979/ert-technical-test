import { TestBed } from '@angular/core/testing';

import { PunkApiService } from './punk-api.service';

describe('PunkApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PunkApiService = TestBed.get(PunkApiService);
    expect(service).toBeTruthy();
  });
});
