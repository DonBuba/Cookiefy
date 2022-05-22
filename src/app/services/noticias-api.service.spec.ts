import { TestBed } from '@angular/core/testing';

import { NoticiasApiService } from './noticias-api.service';

describe('NoticiasApiService', () => {
  let service: NoticiasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
