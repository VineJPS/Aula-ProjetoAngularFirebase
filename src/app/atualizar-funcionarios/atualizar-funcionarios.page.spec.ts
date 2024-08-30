import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizarFuncionariosPage } from './atualizar-funcionarios.page';

describe('AtualizarFuncionariosPage', () => {
  let component: AtualizarFuncionariosPage;
  let fixture: ComponentFixture<AtualizarFuncionariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtualizarFuncionariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
