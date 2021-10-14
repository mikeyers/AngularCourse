import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais-interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {


  termino: string = ''
  hayError: boolean = false;
  paises: Pais[] = [];
  //Inyectamos el servicoi
  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    // para que un observable se dispare tengo que estar subscrito
    this.paisService.buscarPais(termino)
    .subscribe((paises) =>{
      console.log('buscar pais',paises);
      this.paises = paises;
     
    }, (err) =>{
      console.log('Error');
      console.info(err);
      this.hayError = true;
      this.paises = [];
    });
  
  }

  onSearchChange(searchValue: string): void {  
    console.log('sefasdf',searchValue);
  }

  sugerencias(termino: string){
    this.hayError = false;
    // crear sugerencias
  }

}
