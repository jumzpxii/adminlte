import { TestBed } from '@angular/core/testing';

import { SewioService } from './sewio.service';

describe('SewioService', () => {
  let service: SewioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SewioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
