import { Component,Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {

//Para acceder a los datos de personajes de main component
// acceso desde el componente hijo
// Al poner el input los personajes van a venir desde el componente padre
@Input('data_personajes') personajes: Personaje[] = [];
// para ver externamente se puede conocer con el nombre de data dentro de input
// asi desde el main page lo llamariamos como data para que no sea redundante
}
