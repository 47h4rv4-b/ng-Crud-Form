import { TestBed } from '@angular/core/testing';

import { DataShare } from './data-share.service';

describe('DataShareService', () => {
  let service: DataShare;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataShare);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
