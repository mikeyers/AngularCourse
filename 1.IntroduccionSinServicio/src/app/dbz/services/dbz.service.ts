import { Injectable } from "@angular/core";


//Una clase que se pueda inyectar
@Injectable()
export class DbzService{

    constructor(){
        console.log('Servicio inicializado')
    }


}