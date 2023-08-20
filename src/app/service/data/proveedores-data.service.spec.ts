import { TestBed } from '@angular/core/testing';

import { ProveedoresDataService } from './proveedores-data.service';

describe('ProveedoresDataService', () => {
  let service: ProveedoresDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedoresDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
