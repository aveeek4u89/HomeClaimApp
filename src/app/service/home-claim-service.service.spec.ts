import { TestBed } from '@angular/core/testing';

import { HomeClaimServiceService } from './home-claim-service.service';

describe('HomeClaimServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeClaimServiceService = TestBed.get(HomeClaimServiceService);
    expect(service).toBeTruthy();
  });
});
