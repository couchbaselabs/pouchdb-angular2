/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PouchDBService } from './pouchdb.service';

describe('PouchDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PouchDBService]
    });
  });

  it('should ...', inject([PouchDBService], (service: PouchDBService) => {
    expect(service).toBeTruthy();
  }));
});
