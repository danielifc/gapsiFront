import { TestBed } from '@angular/core/testing';

import { CandidatoDataService } from './candidato-data.service';

describe('CandidatoDataService', () => {
  let service: CandidatoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
