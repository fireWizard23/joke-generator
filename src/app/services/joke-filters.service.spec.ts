import { TestBed } from '@angular/core/testing';

import { JokeFiltersService } from './joke-filters.service';

describe('JokeFiltersService', () => {
  let service: JokeFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
