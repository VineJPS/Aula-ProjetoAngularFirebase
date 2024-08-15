import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recado = {
    assunto: null
  }

  constructor(
    private crudservice: CrudService
   ){}

  enviar(){
    this.crudservice.insert(this.recado, 'recados');
  }

  pessoa = {
    foto:'https://images.pexels.com/photos/22776051/pexels-photo-22776051/free-photo-of-mao-design-projeto-visual.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nome: 'Toji Zenin',
    objetivo: 'Programador web sênior',
    contato: {
      email: 'gs519636@gmail.com',
      telefone: '(14)99613-8463',
      github: 'github.com/seleide',
      linkedin: 'linkedin.com/seleide'
    },
    softskills:[
      'Comunicação',
      'Proatividade',
      'Trabalho em Grupo'
    ],
    
    formacacao: [  
    {
      ano_inicio: '2022',
      ano_fim: '2024',
      instituicao: 'Etec Sales Gomes',
      curso: 'Técnico Desenvolvimento de Sistemas'
    },
    {
      ano_inicio: '2025',
      ano_fim: '2027',
      instituicao: 'Faculdade de Tecnologia - Fatec',
      curso: 'Superior em Análise de Desenvolvimentos de Sistemas'
    }
   ],
   projeto: [
    {
      ano: '2023',
      instituicao: 'Etec Sales Gomes',
      nome_projeto: 'Etec Portas Abertas',
      descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quibusdam reprehenderit eum. Animi soluta magni officiis ipsam deleniti, deserunt illo quasi ut tenetur inventore dignissimos quos architecto rem sapiente voluptatum.'
    }
   ] 
  }
  
}
