import { TestBed } from '@angular/core/testing';

import { EstadobusquedaService } from './estadobusqueda.service';

describe('EstadobusquedaService', () => {
  let service: EstadobusquedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadobusquedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
