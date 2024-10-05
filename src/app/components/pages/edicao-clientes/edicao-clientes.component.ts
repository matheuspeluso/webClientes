import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-clientes',
  standalone: true,
  imports: [
    CommonModule, //interagir o ts com o html ex: ngfor if 
    FormsModule,
    ReactiveFormsModule

  ],
  templateUrl: './edicao-clientes.component.html',
  styleUrl: './edicao-clientes.component.css'
})
export class EdicaoClientesComponent {

  mensagem: string = '';
  id: string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRouter: ActivatedRoute // permite ler parametros que foram passados na URL da pagina
  ){}

  //função executada quando a pagina for aberta
  ngOnInit(){
    //capturar o id do cliente enviado na URL
    this.id = this.activatedRouter.snapshot.paramMap.get('id') as string;
    //consultar o cliente na api atraves do id 
    
    this.httpClient.get("http://localhost:8081/api/clientes/"+ this.id)
    .subscribe({
      next: (data) =>{
        //preencher o formulario com os dados do clinetye
       this.formulario.patchValue(data);
      }
    })

  }


  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    cpf: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)])
  });

  //criando um obj para que possamos exibir na página
  get f() {
    return this.formulario.controls;
  }


  //função atuyalizar os dados dos clinete
  atualizarCliente(){
    //enviando uma req put para a API para atualizar o cliente
    this.httpClient.put('http://localhost:8081/api/clientes/'+ this.id,this.formulario.value,
      {responseType: 'text'}).subscribe({
        next: (data) =>{
          this.mensagem = data;
        }
      })
  }

}
