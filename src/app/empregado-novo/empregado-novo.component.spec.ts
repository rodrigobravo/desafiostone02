import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadoNovoComponent } from './empregado-novo.component';

describe('EmpregadoNovoComponent', () => {
  let component: EmpregadoNovoComponent;
  let fixture: ComponentFixture<EmpregadoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregadoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
