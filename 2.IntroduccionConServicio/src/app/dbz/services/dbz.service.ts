import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


//Una clase que se pueda inyectar
@Injectable()
export class DbzService{


   private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
        ];

    get personajes(): Personaje[]{
        // con esos corchetes y esos puntos rompe la referencia
        // es una buena practica no es obligatorio
        return [...this._personajes];
    }

    constructor(){
    }
 

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
    

}