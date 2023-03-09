import { TestBed } from '@angular/core/testing';

import { FirestoreMethodsService } from './firestore-methods.service';

describe('FirestoreMethodsService', () => {
  let service: FirestoreMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
