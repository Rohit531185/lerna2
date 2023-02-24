import { TestBed } from '@angular/core/testing';

import { CommonRegistrationService } from './common-registration.service';

describe('CommonRegistrationService', () => {
  let service: CommonRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
