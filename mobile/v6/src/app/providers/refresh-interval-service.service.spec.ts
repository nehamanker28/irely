import { TestBed } from '@angular/core/testing';

import { RefreshIntervalServiceService } from './refresh-interval-service.service';

describe('RefreshIntervalServiceService', () => {
  let service: RefreshIntervalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshIntervalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
