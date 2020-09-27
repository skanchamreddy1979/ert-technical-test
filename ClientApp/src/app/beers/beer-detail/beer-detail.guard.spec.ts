import { TestBed } from '@angular/core/testing';

import { BeerDetailGuard } from './beer-detail.guard';

describe('BeerDetailGuard', () => {
  let guard: BeerDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BeerDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
