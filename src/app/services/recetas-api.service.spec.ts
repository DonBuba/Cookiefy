import { TestBed } from '@angular/core/testing';

import { RecetasApiService } from './recetas-api.service';

describe('RecetasApiService', () => {
  let service: RecetasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
