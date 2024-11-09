import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {


    constructor(
        private router: Router
    ) {}


    canActivate(): boolean {
       
        const data = sessionStorage.getItem('usuario');


        if(data){
            return true;
        }
        else {
            this.router.navigate(['/pages/usuarios/autenticar']);
            return false;
        }
    }
}





