import { TestBed } from '@angular/core/testing';

import { BdlAuthService } from './bdl-auth.service';

describe('BdlAuthService', () => {
  let service: BdlAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdlAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
