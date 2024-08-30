import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarFuncionariosPageRoutingModule } from './listar-funcionarios-routing.module';

import { ListarFuncionariosPage } from './listar-funcionarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarFuncionariosPageRoutingModule
  ],
  declarations: [ListarFuncionariosPage]
})
export class ListarFuncionariosPageModule {}
