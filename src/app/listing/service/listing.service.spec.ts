import { TestBed } from '@angular/core/testing';

import { ListingService } from './listing.service';

describe('ListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListingService = TestBed.get(ListingService);
    expect(service).toBeTruthy();
  });
});
