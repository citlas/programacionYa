import { TestBed } from '@angular/core/testing';

import { Articulos28Service } from './articulos28.service';

describe('Articulos28Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Articulos28Service = TestBed.get(Articulos28Service);
    expect(service).toBeTruthy();
  });
});
