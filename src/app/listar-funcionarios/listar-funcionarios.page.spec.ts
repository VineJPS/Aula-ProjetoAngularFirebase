import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarFuncionariosPage } from './listar-funcionarios.page';

describe('ListarFuncionariosPage', () => {
  let component: ListarFuncionariosPage;
  let fixture: ComponentFixture<ListarFuncionariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarFuncionariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
