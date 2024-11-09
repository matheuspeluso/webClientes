import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  //atributos
  autenticado : boolean = false;

  nomeUsuario: string = '';
  perfilUsuario: string = '';

  //função executada quando o componente é carregado

  ngOnInit(){
    // ler os dados do usuario contidos na sessionstorage

    var data = sessionStorage.getItem('usuario');

    if(data){ //se tiver dados obtidos
      this.autenticado = true;
      //ler os dados do usuario
      var usuario = JSON.parse(data);
      //armazenar o nome e o perfil do usuário
      this.nomeUsuario = usuario.nome;
      this.perfilUsuario = usuario.perfil;
    }
  }

  //função para fazer o logout do usuario

  logout(){
    if(confirm('Deseja realmente sair do sistema ? ')){
      //apagar os dados da sseionstopgare
      sessionStorage.removeItem('usuario');
      location.href = '/';
    }
  }

}
