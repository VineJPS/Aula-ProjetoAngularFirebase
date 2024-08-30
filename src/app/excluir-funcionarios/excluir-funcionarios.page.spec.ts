import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcluirFuncionariosPage } from './excluir-funcionarios.page';

describe('ExcluirFuncionariosPage', () => {
  let component: ExcluirFuncionariosPage;
  let fixture: ComponentFixture<ExcluirFuncionariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExcluirFuncionariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
