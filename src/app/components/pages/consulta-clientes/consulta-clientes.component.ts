import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-consulta-clientes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgxPaginationModule
  ],
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css'
})
export class ConsultaClientesComponent {
  //atributos
  clientes:any[] = [];
  mensagem: string = '';
  paginador: number = 1; //variavel para poder marcar a pagina que estamos acessando


  //método construtor
  constructor(
    //declarando e inializando a classe HttpCliente
    private httpClient: HttpClient
  ) {}


  //função executada quando noss componente é carregada
  ngOnInit() {
    //fazendo a requisão para consulta de clientes na API
    this.httpClient.get('http://localhost:8081/api/clientes')
    .subscribe({
      //aguardando a api retornar uma resposta
      next: (data) =>{
        //capturando os dados retornado na api 
       //armazenar os dados obtidos no atributo da classe do componmente
       this.clientes = data as any[];
      }
    })
  }

  //função para excluir um cliente selecionado na página
  excluirCliente(id:string){
    if(confirm('Deseja realmente excluir o cliente selecionado?')){
      this.httpClient.delete('http://localhost:8081/api/clientes/' + id,
        { responseType: 'text' }
      ).subscribe({
        next:(data) => {
          //armazenando a mensagem
          this.mensagem = data;
          //executar a consulta novamente
          this.ngOnInit();
        }
      });
    }
  }

  //função para fazer o recurso de avançar e voltar do nosso paginador
  handlePageChange(event: any){
    this.paginador = event;
  }
}
