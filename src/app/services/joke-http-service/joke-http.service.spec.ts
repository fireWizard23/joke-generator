import { TestBed } from '@angular/core/testing';

import { JokeHttpService } from './joke-http.service';

describe('JokeHttpService', () => {
  let service: JokeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
