import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcluirFuncionariosPageRoutingModule } from './excluir-funcionarios-routing.module';

import { ExcluirFuncionariosPage } from './excluir-funcionarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcluirFuncionariosPageRoutingModule
  ],
  declarations: [ExcluirFuncionariosPage]
})
export class ExcluirFuncionariosPageModule {}
