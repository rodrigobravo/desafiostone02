import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadoEditarComponent } from './empregado-editar.component';

describe('EmpregadoEditarComponent', () => {
  let component: EmpregadoEditarComponent;
  let fixture: ComponentFixture<EmpregadoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregadoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
