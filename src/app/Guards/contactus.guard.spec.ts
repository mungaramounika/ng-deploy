import { TestBed } from '@angular/core/testing';

import { ContactusGuard } from './contactus.guard';

describe('ContactusGuard', () => {
  let guard: ContactusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContactusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
