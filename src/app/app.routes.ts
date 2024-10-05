import { Routes } from '@angular/router';
import { CadastroClientesComponent } from './components/pages/cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './components/pages/consulta-clientes/consulta-clientes.component';
import { EdicaoClientesComponent } from './components/pages/edicao-clientes/edicao-clientes.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'pages/clientes/cadastro', //ROTA (URL)
        component: CadastroClientesComponent
    },
    {
        path: 'pages/clientes/consulta',
        component: ConsultaClientesComponent
    },
    {
        path: 'pages/clientes/edicao/:id', //quando coloco os : o angular entende que vou passar uma variável
        component: EdicaoClientesComponent
    },
    {
        path: 'pages/clientes/dashboard', //rota
        component: DashboardComponent
    },
    //definindo uma pagina home
    {
        path: '', pathMatch: 'full', // ROTA raiz do projeto
        redirectTo: '/pages/clientes/dashboard'
    }
];
