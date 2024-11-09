import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-clientes.component.html',
  styleUrl: './cadastro-clientes.component.css'
})
export class CadastroClientesComponent {

  //atributo
  mensagem: string = '';

  constructor(
    private HttpClient: HttpClient//FAZ CONEXÃO COM A API
  ) { }

  //criando o obj para capyurar o formulario
  //os campos ja deve ter o mesmo nome da api
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


  //função executada quando o usuario clicar no btn submit do formulario

  cadastrarCliente() {
    //FAZENDO UMA REQUISIÇÃO POST PARA O SERVIÇÕ DE CDASTRO DA API

    this.HttpClient
      .post('http://localhost:8081/api/clientes', this.formulario.value,
        { responseType: 'text' })

      .subscribe({
        next: (data) => {
          this.mensagem = data;
          // limpar os campos do formulário
          if (data.includes('sucesso')) {
            this.formulario.reset();
          }
        }
      });
  }
}