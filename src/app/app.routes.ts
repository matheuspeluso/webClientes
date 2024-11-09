import { Routes } from '@angular/router';
import { CadastroClientesComponent } from './components/pages/cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './components/pages/consulta-clientes/consulta-clientes.component';
import { EdicaoClientesComponent } from './components/pages/edicao-clientes/edicao-clientes.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AutenticarUsuarioComponent } from './components/pages/autenticar-usuario/autenticar-usuario.component';
import { CriarUsuarioComponent } from './components/pages/criar-usuario/criar-usuario.component';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: "pages/usuarios/autenticar",
        component: AutenticarUsuarioComponent,
        canActivate: [LoginGuard]
    },
    {
        path: "pages/usuarios/criar",
        component: CriarUsuarioComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'pages/clientes/cadastro', //ROTA (URL)
        component: CadastroClientesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pages/clientes/consulta',
        component: ConsultaClientesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pages/clientes/edicao/:id', //quando coloco os : o angular entende que vou passar uma variável
        component: EdicaoClientesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pages/clientes/dashboard', //rota
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    //definindo uma pagina home
    {
        path: '', pathMatch: 'full', // ROTA raiz do projeto
        redirectTo: '/pages/usuarios/autenticar'
    }
];
