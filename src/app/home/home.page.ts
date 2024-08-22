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
  usuario: any = {
    email: null,
    senha: null
  }

  id: any;
  recado = {
    assunto: null,
    mensagem: null
  }

  recados: any = []; //any traz qualquer parada

  constructor(
    public crudservice: CrudService,
    public authService: AuthenticateService
   ){}


  enviar(){
    this.crudservice.insert(this.recado, 'recados');
  }

  carregar(){
    this.recados = []
    this.crudservice.fetchAll('recados')
    .then((response) => {
      console.log(response);
      this.recados = response
    }) // tiver sucesso
    .catch((erro) => {
      console.log(erro);
    }) // ocorrer erro
    .finally(() =>{
      console.log('Processo finalizado');
    }) // Quando finalizar a requiseção
  }
  delete(id: string){
    this.crudservice.remove(id, "recados")
    this.carregar()
  }
  selecionar(recado: any) {
    this.id = recado.id
    this.recado = recado;
    console.log(this.recado)
  }
  atualizar(){
    this.crudservice.update(this.id, this.recado, 'recados')
  }

  registrar(){
    this.authService.register(this.usuario.email, this.usuario.senha);
  }

  login(){
    this.authService.login(this.usuario.email, this.usuario.senha);
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
