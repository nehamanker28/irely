import { TestBed } from '@angular/core/testing';

import { i21SyncDeviceService } from './i21syncdevice.service';

describe('i21SyncDeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: i21SyncDeviceService = TestBed.get(i21SyncDeviceService);
    expect(service).toBeTruthy();
  });
});
