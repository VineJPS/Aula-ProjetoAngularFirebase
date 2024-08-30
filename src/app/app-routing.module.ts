import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar-funcionario',
    loadChildren: () => import('./cadastrar-funcionario/cadastrar-funcionario.module').then( m => m.CadastrarFuncionarioPageModule)
  },
  {
    path: 'listar-funcionarios',
    loadChildren: () => import('./listar-funcionarios/listar-funcionarios.module').then( m => m.ListarFuncionariosPageModule)
  },
  {
    path: 'atualizar-funcionarios',
    loadChildren: () => import('./atualizar-funcionarios/atualizar-funcionarios.module').then( m => m.AtualizarFuncionariosPageModule)
  },
  {
    path: 'excluir-funcionarios',
    loadChildren: () => import('./excluir-funcionarios/excluir-funcionarios.module').then( m => m.ExcluirFuncionariosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
