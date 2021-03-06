import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pais } from '../interfaces/pais-interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ='https://restcountries.eu/rest/v2'
 
  constructor(private http: HttpClient) { }

  // retorna un observable
  buscarPais(termino: string): Observable<Pais[]>{

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url)
    // .pipe( // of (genera observable) atrapa el error y devuelve un array vacio
    //   catchError(err => of(['aaaaaaaaaaaaaaaaaa']))
    // );
  }

}
