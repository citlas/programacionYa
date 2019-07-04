import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoEj9Component } from './dado-ej9.component';

describe('DadoEj9Component', () => {
  let component: DadoEj9Component;
  let fixture: ComponentFixture<DadoEj9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadoEj9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadoEj9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
