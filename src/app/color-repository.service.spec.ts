import { TestBed } from '@angular/core/testing';

import { ColorRepositoryService } from './color-repository.service';

describe('ColorRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorRepositoryService = TestBed.get(ColorRepositoryService);
    expect(service).toBeTruthy();
  });
});
