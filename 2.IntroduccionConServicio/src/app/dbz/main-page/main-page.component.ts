import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {


// personajes: Personaje[] = [];

nuevo: Personaje = {
  nombre: 'Maestro Roshi',
  poder: 1000
}




// cambiarNombre(event: any){
//   console.log(event.target.value);
// }

// agregarNuevoPersonaje(argumento: Personaje){
// //debugger;//breakpoint para debugear en el navegador
// // this.personajes.push(argumento);
// }

//Inyectamos el servicio a traves del constructor en el componente
constructor()
{

}


}
