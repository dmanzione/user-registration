import { TestBed } from '@angular/core/testing';

import { StateTrackerService } from './state-tracker.service';

describe('StateTrackerService', () => {
  let service: StateTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
