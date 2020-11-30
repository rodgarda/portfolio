import { TestBed } from '@angular/core/testing';

import { TitulacionService } from './titulacion.service';

describe('titulacionService', () => {
  let service: TitulacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitulacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
