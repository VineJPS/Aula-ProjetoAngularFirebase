import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarFuncionariosPage } from './atualizar-funcionarios.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarFuncionariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarFuncionariosPageRoutingModule {}
