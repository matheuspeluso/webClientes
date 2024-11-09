import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {


    constructor(
        private router: Router
    ) {}


    canActivate(): boolean {
       
        const data = sessionStorage.getItem('usuario');


        if(data){
            this.router.navigate(['/pages/clientes/dashboard']);
            return false;
        }
        else {            
            return true;
        }
    }
}





