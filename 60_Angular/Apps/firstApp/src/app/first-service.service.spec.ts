import { TestBed } from '@angular/core/testing';

import { FirstServiceService } from './first-service.service';

describe('FirstServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstServiceService = TestBed.get(FirstServiceService);
    expect(service).toBeTruthy();
  });
});
