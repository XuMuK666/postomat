import { TestBed } from '@angular/core/testing';

import { MOZApiService } from './mozapi.service';

describe('MOZApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MOZApiService = TestBed.get(MOZApiService);
    expect(service).toBeTruthy();
  });
});
