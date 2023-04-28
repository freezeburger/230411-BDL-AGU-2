import { TestBed } from '@angular/core/testing';

import { AuthDelegateService } from './auth-delegate.service';

describe('AuthDelegateService', () => {
  let service: AuthDelegateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDelegateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
