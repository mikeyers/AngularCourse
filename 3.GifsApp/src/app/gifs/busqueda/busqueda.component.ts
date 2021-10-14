import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  // ! operador para asegurarse que el objeto no es nulo
  // viewChield acceso a la referencia creada en el input,
  //que tambien se podria usar para esto el ngModel
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  
  constructor(private gifsService: GifsService){

  }
  
  buscar(termino:string){
    //Valor escrito en el input
    const valor = this.txtBuscar.nativeElement.value;

    //Para evitar que al presionar enter sin escribir nada se creen
    // nuevos elementos del sidebar de la busqueda
    if(valor.trim().length === 0){
      return;
    }

    this.gifsService.buscarGifs(valor);

    //borrar input
    this.txtBuscar.nativeElement.value = '';
  }

// obtenerValor(valor:string){
//   alert(valor);
// }

}
