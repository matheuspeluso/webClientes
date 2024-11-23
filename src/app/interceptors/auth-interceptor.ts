/*
    Lista de endpoints que precisam do TOKEN JWT
    para autenticação da requisição
*/

import { HttpInterceptorFn } from "@angular/common/http";

const endpoints = [
    "api/clientes",
    "api/tipos",
    "api/dashboard"
];

/*
 * Interceptar as requisições feitas pelo angular e se necessario, enviar o TOKEN JWT
 */

export const AuthInterceptor : HttpInterceptorFn = (req,  next) =>{
    //verificando se a requisição feita pelo angular for para alguns dos end points 

    if(endpoints.some(endpoint => req.url.includes(endpoint))){
        const usuario = sessionStorage.getItem('usuario');

        if(usuario){
            //capturando o token
            const usuarioData = JSON.parse(usuario);
            const token = (usuarioData as any).token;
            //enviando o token no cabeçario da requisição

            const request = req.clone({
                setHeaders: {Authorization : `Bearer ${token}`}
            })

            //enviando requisição
            return next(request);
        }

    }
    //enviando a requisição sem anexar o TOKEN JWT, caso não entre no if
    return next(req);
}