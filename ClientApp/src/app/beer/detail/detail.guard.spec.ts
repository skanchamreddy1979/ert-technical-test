import { TestBed } from '@angular/core/testing';
import { BeerDetailGuard } from './detail.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('BeerDetailGuard', () => {
  let guard: BeerDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.get(BeerDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
