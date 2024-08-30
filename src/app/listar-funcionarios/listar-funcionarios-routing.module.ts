import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarFuncionariosPage } from './listar-funcionarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListarFuncionariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarFuncionariosPageRoutingModule {}
