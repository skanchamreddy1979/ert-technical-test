import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PunkApiService } from './punk-api.service';

describe('PunkApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: PunkApiService = TestBed.get(PunkApiService);
    expect(service).toBeTruthy();
  });
});
