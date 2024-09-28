import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-clientes',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css'
})
export class ConsultaClientesComponent {
  //atributos
  clientes:any[] = [];


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
}
