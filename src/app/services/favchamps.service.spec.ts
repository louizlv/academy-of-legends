import { TestBed } from '@angular/core/testing';

import { FavchampsService } from './favchamps.service';

describe('FavchampsService', () => {
  let service: FavchampsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavchampsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
