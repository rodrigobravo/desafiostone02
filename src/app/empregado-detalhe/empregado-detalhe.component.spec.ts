import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadoDetalheComponent } from './empregado-detalhe.component';

describe('EmpregadoDetalheComponent', () => {
  let component: EmpregadoDetalheComponent;
  let fixture: ComponentFixture<EmpregadoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregadoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
