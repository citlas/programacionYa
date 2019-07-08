import { TestBed } from '@angular/core/testing';

import { Articulos17Service } from './articulos17.service';

describe('Articulos17Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Articulos17Service = TestBed.get(Articulos17Service);
    expect(service).toBeTruthy();
  });
});
