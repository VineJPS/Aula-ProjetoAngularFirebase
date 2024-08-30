import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarFuncionariosPageRoutingModule } from './atualizar-funcionarios-routing.module';

import { AtualizarFuncionariosPage } from './atualizar-funcionarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarFuncionariosPageRoutingModule
  ],
  declarations: [AtualizarFuncionariosPage]
})
export class AtualizarFuncionariosPageModule {}
