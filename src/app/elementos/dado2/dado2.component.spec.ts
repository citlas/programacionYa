import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dado2Component } from './dado2.component';

describe('DadoComponent', () => {
  let component: Dado2Component;
  let fixture: ComponentFixture<Dado2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dado2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
