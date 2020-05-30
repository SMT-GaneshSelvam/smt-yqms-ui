import { TestBed } from '@angular/core/testing';

import { TagGroupService } from './tag-group.service';

describe('TagGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagGroupService = TestBed.get(TagGroupService);
    expect(service).toBeTruthy();
  });
});
