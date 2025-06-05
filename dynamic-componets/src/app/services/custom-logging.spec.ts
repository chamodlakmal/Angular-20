import { TestBed } from '@angular/core/testing';

import { CustomLogging } from './custom-logging';

describe('CustomLogging', () => {
  let service: CustomLogging;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLogging);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
