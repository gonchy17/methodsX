import { TestBed } from '@angular/core/testing';

import { StTwoService } from './st-two.service';

describe('StTwoService', () => {
  let service: StTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
