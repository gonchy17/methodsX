import { TestBed } from '@angular/core/testing';

import { StOneService } from './st-one.service';

describe('StOneService', () => {
  let service: StOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
