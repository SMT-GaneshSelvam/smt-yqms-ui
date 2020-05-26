import { TestBed } from '@angular/core/testing';

import { PunchlistService } from './punchlist.service';

describe('PunchlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PunchlistService = TestBed.get(PunchlistService);
    expect(service).toBeTruthy();
  });
});
