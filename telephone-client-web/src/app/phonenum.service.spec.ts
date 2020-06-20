import { TestBed } from '@angular/core/testing';

import { PhonenumService } from './phonenum.service';

describe('PhonenumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonenumService = TestBed.get(PhonenumService);
    expect(service).toBeTruthy();
  });
});
