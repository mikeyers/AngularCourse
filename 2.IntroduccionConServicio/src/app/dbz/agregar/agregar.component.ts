import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

//  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {

    nombre: '',
    poder: 0,

  }

  constructor(private dbzService: DbzService){

  }


//Output (emitir eventos) para pasar un valor del componente hijo al padre
//Siempre especificar un tipo, en este caso es de tipo Personaje
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar() {
    // if( this.nuevo.trim() === 0){
    //   return;
    // }
    // console.log(this.nuevo);
    // this.personajes.push(this.nuevo)
    // this.onNuevoPersonaje.emit(this.nuevo);
    
    this.dbzService.agregarPersonaje(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder : 0
    }
  }



}
