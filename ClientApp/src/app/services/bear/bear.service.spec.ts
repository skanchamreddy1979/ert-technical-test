import { TestBed } from '@angular/core/testing';

import { BearService } from './bear.service';

describe('BearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BearService = TestBed.get(BearService);
    expect(service).toBeTruthy();
  });
});
