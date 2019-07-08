import { TestBed } from '@angular/core/testing';

import { Articulos18Service } from './articulos18.service';

describe('Articulos18Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Articulos18Service = TestBed.get(Articulos18Service);
    expect(service).toBeTruthy();
  });
});
