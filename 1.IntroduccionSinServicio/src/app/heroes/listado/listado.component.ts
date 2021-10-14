import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  // constructor() { 
  //   console.log("constructor");
  // }

  // ngOnInit(): void {  // Sirve para inicializar, peticiones a algun sitio y traernos la informacion
  //   console.log("ngOnInit");
  // }

   heroes: string[] = ['Spiderman','Iroman','Hulk','Thor','Capitan América']
   heroeBorrado: string = '';


  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';

   
  }

  
}
