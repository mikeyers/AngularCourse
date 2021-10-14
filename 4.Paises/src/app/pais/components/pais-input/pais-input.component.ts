import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {

  //evento con el nombre onEnter
  // normalmente el nombre que le damos empieza por on
  // para indentificar que es un evento
@Output() onEnter: EventEmitter<string> = new EventEmitter();
// se va a emitir cuando la persona deje de escribir en el input
@Output() onDebounce:  EventEmitter<string> = new EventEmitter();

// Subject es de rjxs es un observable
debouncer: Subject<string> = new Subject();

termino: string = '';

// se dispara una unica vez cuando el componente es creado
ngOnInit(): void {
this.debouncer
.pipe(
  debounceTime(300) // milesimas de segundos de espera para emitir el siguiente valor
)
.subscribe(valor =>{
  this.onDebounce.emit(valor);
})
}

buscar(){ // emitimos el valor(termino) del input
  this.onEnter.emit(this.termino);

}

teclaPresionada(){
  //next manda el siguiente valor
 this.debouncer.next(this.termino);
}

}
