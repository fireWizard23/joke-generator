import { TestBed } from '@angular/core/testing';

import { NavbarEventsService } from './navbar-events.service';

describe('NavbarEventsService', () => {
  let service: NavbarEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
