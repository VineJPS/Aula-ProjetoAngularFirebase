import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluirFuncionariosPage } from './excluir-funcionarios.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluirFuncionariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluirFuncionariosPageRoutingModule {}
